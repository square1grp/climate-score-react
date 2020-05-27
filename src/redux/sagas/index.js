import { all } from 'redux-saga/effects'

import scoreSaga from './score'

// combine all saga
export default function* rootSaga(getState) {
  yield all([
    scoreSaga()
  ]);
}
