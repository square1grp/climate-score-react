import { all, takeLatest, put, call } from 'redux-saga/effects'
import actions from '../actions/score'

// visualization saga
export function* fetchScoreData() {
  try {
    let res_status = null;
    const response = yield call(() => fetch(
      'http://localhost:5000/api/score'
    ).then(res => {
      res_status = res.status

      if (res.status !== 200)
        return res.text()

      return res.json()
    }))

    if (res_status === 200) { // request is completed and use data.
      yield put({ type: actions.FETCH_DATA_SUCCESS, response })
    } else { // requests is failed
      throw (response)
    }
  } catch (e) {
    yield put({ type: actions.FETCH_DATA_FAILED })
  }
}

export default function* rootSaga() {
  yield all([
    yield takeLatest(actions.FETCH_DATA, fetchScoreData),
  ])
}
