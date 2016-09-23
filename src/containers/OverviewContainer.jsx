import React, { Component } from 'react'
import { connect } from 'react-redux'

import Overview from '../components/Overview'
// import { Link } from 'react-router'
// import RaisedButton from 'material-ui/RaisedButton'
// import FullHeight from '../components/FullHeight'
// import { setData } from '../actions'
//
// import styles from './styles'
// import { sampleDataSet, cases } from '../utils/fixtures'
// import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward'
const mapStateToProps = (state) => {
  return {
    ...state.modules.currentModule
   }
}

class OverviewContainer extends Component {
  constructor(props, state) {
    super(props, state)
  }
  render() {
    return (
      <Overview
        module={this.props.info}
      />
    )
  }
}

export default connect(mapStateToProps)(OverviewContainer)
