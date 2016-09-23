import React, { Component } from 'react'
import { connect } from 'react-redux'

import TopNav from '../components/TopNav'
import DataTable from '../components/DataTable'
import ActionButton from '../components/ActionButton'

class EditDataTable extends Component {
  constructor(props, state) {
    super(props, state)
  }
  render() {
    return (
      <div style={{ paddingTop: 60 }}>
        <TopNav prevRoute={"/"} title="Edit Data" />

        <DataTable
          reverse
          data={this.props.data}
          colHeaders={["Lot ID", "Temp (F)", "Stress (ksi)", "Rupture Time"]}
          columns={[{
              type: 'text'
            }, {
              type: 'numeric'
            }, {
              type: 'numeric'
            },  {
              type: 'numeric'
            }]}/>
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
