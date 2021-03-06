import * as React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {
  HomePage,
  ScorePage,
  ReportPage,
  UnlockPage,
  CheckoutPage,
  OrderCompletePage
} from '../pages'

// App Router
class RoutedApplication extends React.Component {
  render() {
    return (
      <ConnectedRouter history={this.props.history}>

        <Header />

        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/score' component={ScorePage} />
          <Route path='/report' component={ReportPage} />
          <Route path='/unlock' component={UnlockPage} />
          <Route path='/checkout' component={CheckoutPage} />
          <Route path='/order-complete' component={OrderCompletePage} />
        </Switch>

        <Footer />

      </ConnectedRouter>
    )
  }
}

export default RoutedApplication;