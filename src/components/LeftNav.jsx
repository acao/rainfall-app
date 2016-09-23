import React from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { connect } from 'react-redux'
import { setUIState } from '../actions'
import { AppRouter } from '../Routes'

class LeftNav extends React.Component {
  constructor(props) {
    super(props)
    this.onRequestChange = this.onRequestChange.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }
  onRequestChange = () => this.props.dispatch(setUIState({ leftNavOpen: true }))
  handleClose = () => this.props.dispatch(setUIState({ leftNavOpen: false }))
  render() {
    return (
      <div>
        <Drawer
            open={this.props.leftNavOpen}
            docked={true}
            width={200}
            onRequestChange={this.onRequestChange}
          >
          <MenuItem onTouchTap={this.handleClose}>Menu Item 1</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    )
  }
}

export default connect((state)=>{
  return {
    leftNavOpen: state.ui.leftNavOpen
  }
})(LeftNav)
