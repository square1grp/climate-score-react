import * as React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router'
import Header from '../components/Header'
import {
  HomePage
} from '../pages'

// App Router
class RoutedApplication extends React.Component {
  render() {
    return (
      <ConnectedRouter history={this.props.history}>

        <Header />

        <Switch>
          <Route path='/' exact component={HomePage} />
        </Switch>

      </ConnectedRouter>
    )
  }
}

export default RoutedApplication;