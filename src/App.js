import React from 'react'
import { Provider } from 'react-redux'
import { store, history } from './redux/store'
import AppRouter from './routes'
import { StripeProvider } from 'react-stripe-elements';

import './App.scss'

// App Container
function App() {
  return (
    <Provider store={store}>
      <StripeProvider apiKey="pk_test_51GqMLtJRjq8u23eq6jc6vFvTWouABOklPhGq5dFOm0nw2VoWKyrm3JUFqM8IzuQUqHFatdCEbKR0QJiSlYFlMvGc00NyxnAfyr">
        <AppRouter history={history} />
      </StripeProvider>
    </Provider>
  )
}

export default App;