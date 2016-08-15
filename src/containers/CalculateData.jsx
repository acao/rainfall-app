import React, { Component } from 'react'
import { connect } from 'react-redux'

import { calculateData } from '../actions'
import TopNav from '../components/TopNav'
import DataTable from '../components/DataTable'
import ActionButton from '../components/ActionButton'

class CalculateData extends Component {
  constructor(props, state) {
    super(props, state)
  }
  componentWillMount() {
    this.props.dispatch(calculateData())
  }
  render() {
    return (
      <div style={{ paddingTop: 60 }}>
        <TopNav prevRoute={"/review-data"} title="Calculate Data" />
        <DataTable data={this.props.results} headers={ [ 'Time Range', 'Strain', 'Max Stress', 'Mean Stress' ] }/>
        <ActionButton route="/review-results" />
      </div>
    )
  }
}
const mapStateToProps = (state)=> {
  return {
    results: state.dataset.results
  }
}
export default connect(mapStateToProps)(CalculateData)
