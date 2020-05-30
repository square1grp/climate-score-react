import { all, takeLatest, put, call } from 'redux-saga/effects'
import actions from '../actions/score'

// visualization saga
export function* fetchScoreData({ address }) {
  try {
    let res_status = null;

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let graphql = JSON.stringify({
      query: `query {
        getScore(address: "${address}") {
          address,
          avgScore,
          droughtScore,
          temperatureScore,
          fireScore,
          floodScore,
          rainScore
        }
      }`,
      variables: {}
    })

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: graphql,
      redirect: 'follow'
    };

    const response = yield call(() => fetch("http://localhost:4000", requestOptions)
      .then(res => {
        res_status = res.status

        if (res.status !== 200)
          return res.text()

        return res.json()
      })
      .then(result => {
        return result.data.getScore
      }))

    console.log(response)
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
