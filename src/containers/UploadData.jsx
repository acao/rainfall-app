import React, { Component } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import { importFiles } from '../actions'

import TopNav from '../components/TopNav'
import ActionButton from '../components/ActionButton'


class UploadData extends Component {
  constructor(props, state) {
    super(props, state)
    this.state = {
      numFiles: 0
    }
    this.openFileDialog = this.openFileDialog.bind(this)
  }
  openFileDialog() {
    this._fileInput.click()
  }
  render() {
    return (
      <div style={{ paddingTop: 60 }}>
        <TopNav prevRoute={"/"} title="Upload Data" />
        <Paper zDepth={0}>
          <div style={{ padding: 40, paddingBottom: 20 }}>
            <RaisedButton
                label="Select File(s)..."
                onClick={this.openFileDialog}/>
              <input
                type="file"
                style={{ display: 'none' }}
                id="files"
                multiple
                ref={(c) => this._fileInput = c}
                onChange={()=> {
                  this.setState({ numFiles: this._fileInput.files.length || 0 })
                }}
              />
              {(this.state.numFiles > 0) ? (
                <span style={{ padding: 14 }}>{this.state.numFiles} {this.state.numFiles > 1 ? 'files' : 'file'} selected</span>
              ) : <span style={{ padding: 14 }}></span>}
          </div>
          <div style={{ padding: 40, paddingTop: 20 }}>
            <RaisedButton
                label={`Upload ${(this.state.numFiles > 1 ? 'Files' : 'File')}`}
                primary
                disabled={(this.state.numFiles === 0)}
                onClick={()=>{
                  this.props.dispatch(importFiles(this._fileInput.files))
                }}
            />
          </div>
        </Paper>
        <ActionButton route="/edit-data" />
      </div>
    )
  }
}

export default connect()(UploadData)
