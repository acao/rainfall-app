import React from 'react'
import { Link } from 'react-router'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back'
import Create from 'material-ui/svg-icons/content/create'
import Paste from 'material-ui/svg-icons/content/content-paste'

const TopNav = (props) => (
  <div>
    <AppBar
    style={{ top: 0, position: 'fixed' }}
    title={props.title}
    iconElementLeft={<Link to={ props.prevRoute || '/'}><IconButton><ArrowBack color="white" /></IconButton></Link>}
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

export default TopNav
