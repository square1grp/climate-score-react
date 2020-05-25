import React from 'react'
import { Provider } from 'react-redux'
import { store, history } from './redux/store'
import AppRouter from './routes'

import './App.scss'

// App Container
function App() {
  return (
    <Provider store={store}>
      <AppRouter history={history} />
    </Provider>
  )
}

export default App;