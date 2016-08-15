import React, { Component } from 'react'
import { connect } from 'react-redux'


import { setData } from '../actions'
import TopNav from '../components/TopNav'
import DataTable from '../components/DataTable'
import ActionButton from '../components/ActionButton'

class EditDataTable extends Component {
  constructor(props, state) {
    super(props, state)
  }
  componentDidMount() {
    setData(this.props.data)
  }
  render() {
    return (
      <div style={{paddingTop: 60}}>
        <TopNav prevRoute={"/welcome"} title="Edit Data" />
        <DataTable data={this.props.data}/>
        <ActionButton route="/review-data" />
      </div>
    )
  }
}
const mapStateToProps = (state)=> {
  console.log(state);
  return {
    data: state.dataset.data
  }
}
export default connect(mapStateToProps)(EditDataTable)
