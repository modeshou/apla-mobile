import { connect } from 'react-redux';
import Protypo from 'components/Protypo';

import * as auth from 'modules/auth';
import * as page from 'modules/page';
import * as application from 'modules/application';

const generateId = state =>
  [
    auth.selectors.getCurrentAccountAddress(state),
    auth.selectors.getCurrentEcosystemId(state),
    application.selectors.getCurrentPageId(state)
  ].join('_');

const mapStateToProps = (state: any, ownProps: any) => {
  let currentPage;

  if (!ownProps.pageName) {
    currentPage = page.selectors.getCurrentPage(state);
  } else {
    currentPage = page.selectors.getPages(state)[ownProps.pageName];
  }

  return {
    id: generateId(state),
    payload: currentPage.tree || []
  };
};

export default connect(mapStateToProps)(Protypo);
