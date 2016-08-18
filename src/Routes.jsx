import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import store from './store'

// Containers
import Main from './containers/Main'
import Welcome from './containers/Welcome'
import EditDataTable from './containers/EditDataTable'
import UploadData from './containers/UploadData'
import ReviewData from './containers/ReviewData'
import CalculateData from './containers/CalculateData'
import ReviewResults from './containers/ReviewResults'

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
              <Route path="upload-data" component={UploadData} />
              <Route path="review-data" component={ReviewData} />
              <Route path="calculate-data" component={CalculateData} />
              <Route path="review-results" component={ReviewResults} />
            </Route>
          </Router>
      </Provider>
    )
  }
}
export default Routes
