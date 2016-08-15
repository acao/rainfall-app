import React, { Component } from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import * as reducers from './reducers';

// Containers
import Main from './containers/Main'
import Welcome from './containers/Welcome'
import EditDataTable from './containers/EditDataTable'
import ReviewData from './containers/ReviewData'
import CalculateData from './containers/CalculateData'

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)

const history = syncHistoryWithStore(browserHistory, store)

class Routes extends Component {
  constructor(props, state) {
   super(props, state)
  }
  render() {
    return (
      <Provider store={store}>
          <Router history={history}>
            <Route path="/" component={Main}>
              <IndexRoute component={Welcome} />
              <Route path="edit-data" component={EditDataTable} />
              <Route path="review-data" component={ReviewData} />
              <Route path="calculate-data" component={CalculateData} />
            </Route>
          </Router>
      </Provider>
    )
  }
}
export default Routes
