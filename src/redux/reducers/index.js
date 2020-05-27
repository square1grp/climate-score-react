import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"

import score from './score'

// combine all reducers
export default (history) => combineReducers({
  router: connectRouter(history),
  score
});