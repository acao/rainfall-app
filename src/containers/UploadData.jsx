import React, { Component } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'

import TopNav from '../components/TopNav'
import DataTable from '../components/DataTable'
import ActionButton from '../components/ActionButton'

const UploadWidget = (props) => (
  <div style={{paddingBottom: 20}}>
    <input type="file" id="files" multiple />
  </div>
)

class Welcome extends Component {
  constructor(props, state){
    super(props, state)
  }
  render(){
    return (
      <div style={{paddingTop: 60}}>
        <TopNav prevRoute={"/"} title="Upload Data" />
        <Paper>
          <div style={{padding: 40}}>
            <input type="file" id="files" multiple onChange={(e)=>console.log(e)} />
          </div>
        </Paper>
        <ActionButton route="/edit-data" />
      </div>
    )
  }
}

export default connect()(Welcome)
