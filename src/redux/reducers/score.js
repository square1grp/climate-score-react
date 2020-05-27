import scoreActions from '../actions/score';

const initialState = {
  score: {}
}

// visualization reducer
export default function scoreReducer(state = initialState, action) {
  switch (action.type) {
    // fetch data is success
    case scoreActions.FETCH_DATA_SUCCESS:
      // set data to the state, so visualization component can use it
      return {
        ...state,
        score: {
          ...action.response
        }
      }
    // fetch data is failed
    case scoreActions.FETCH_DATA_FAILED:
      // set visualization data as empty
      return {
        ...state,
        score: {}
      }

    // other cases
    default:
      return state;
  }
}
