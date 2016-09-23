import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'
import Create from 'material-ui/svg-icons/content/create'
import Paste from 'material-ui/svg-icons/content/content-paste'

import { setUIState } from '../actions'


class TopNav extends React.Component {
  constructor(props) {
    super(props)
    this.handleToggle = this.handleToggle.bind(this)
  }
  handleToggle = () => this.props.dispatch(setUIState({ leftNavOpen: !this.props.leftNavOpen }))
  render() {
    const { title } = this.props
    return (
      <div>
        <AppBar
        style={{ top: 0, position: 'fixed' }}
        title={title}
        iconElementLeft={<IconButton onTouchTap={this.handleToggle}><NavigationMenu color="white" /></IconButton>}
        iconElementRight={
          <IconMenu
            iconButtonElement={
              <IconButton><MoreVertIcon /></IconButton>
            }
            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
          >
            <MenuItem primaryText="Edit Rows" leftIcon={<Create />} />
            <MenuItem primaryText="Paste Data Set" leftIcon={<Paste />} />
          </IconMenu>
          }
        />
      </div>
    )
  }
}

export default connect((state)=>{
  return {
    leftNavOpen: state.ui.leftNavOpen
  }
})(TopNav)
