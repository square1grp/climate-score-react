import { createStore, applyMiddleware, compose } from "redux"
import thunkMiddleware from "redux-thunk"
import * as ReduxLogger from "redux-logger"
import createRootReducer from "./reducers"
import { createBrowserHistory } from "history"
import { routerMiddleware } from "connected-react-router"
import createSagaMiddleware from "redux-saga"
import rootSaga from './sagas';

const loggerMiddleware = ReduxLogger.createLogger()
const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()
const routeMiddleware = routerMiddleware(history)

// create store
const store = createStore(
  createRootReducer(history), // root reducer with router state
  {},
  compose(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      sagaMiddleware,
      routeMiddleware,
      thunkMiddleware,
      loggerMiddleware
    ),
  ),
)

sagaMiddleware.run(rootSaga)

export { store, history };