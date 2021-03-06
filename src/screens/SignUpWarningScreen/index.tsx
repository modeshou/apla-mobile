import * as React from 'react';
import { View } from 'react-native';
import { NavigationStackScreenOptions, NavigationScreenProps } from 'react-navigation';
import SignUpWarningContainer from 'containers/SignUpWarningContainer';

import styles from './styles';

export default class SignUpWarningScreen extends React.Component {
  public static navigationOptions = (): NavigationStackScreenOptions => ({
    headerTitle: '  ',
  })

  public render() {
    return (
      <View style={styles.container}>
        <SignUpWarningContainer />
      </View>
    );
  }
}