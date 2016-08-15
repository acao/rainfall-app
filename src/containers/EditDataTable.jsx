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
  componentWillMount() {
    this.props.dispatch(setData([[ 0,1,2,3,4,6,7,8,9,10,11,12 ],
    [ 0,200,-100,300,-200,100,-200,200,-100,300,-200,100 ],
    [ 0,0.02,-0.01,0.03,-0.02,0.01,-0.1,0.02,-0.01,0.03,-0.02,0.01 ]]))
  }
  render() {
    return (
      <div style={{paddingTop: 60}}>
        <TopNav prevRoute={"/welcome"} title="Edit Data" />
        <DataTable reverse data={this.props.data}/>
        <ActionButton route="/review-data" />
      </div>
    )
  }
}
const mapStateToProps = (state)=> {
  return {
    data: state.dataset.data
  }
}
export default connect(mapStateToProps)(EditDataTable)
