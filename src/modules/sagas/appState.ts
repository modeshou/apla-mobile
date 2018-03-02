import { AppState } from 'react-native';
import * as CodePush from 'react-native-code-push';

import { eventChannel, takeEvery } from 'redux-saga';

const appStateChanel = eventChannel(emitter => {
  AppState.addEventListener('change', emitter);

  return () => {
    AppState.removeEventListener('change', emitter);
  }
});

export default function* appStateWorker() {
  yield takeEvery(appStateChanel, (nextState: any) => {
    if (nextState === 'active') {
      CodePush.sync({ updateDialog: true, installMode: CodePush.InstallMode.IMMEDIATE });
    }
  })
}