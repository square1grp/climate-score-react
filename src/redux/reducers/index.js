import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"

// combine all reducers
export default (history) => combineReducers({
  router: connectRouter(history),
});