import React from 'react';
import { Link } from 'react-router'
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward'
import FloatingActionButton from 'material-ui/FloatingActionButton'

const ActionButton = (props) => (
  <div style={{ position: 'fixed', bottom: 16, right: 16, zIndex: 2000 }}>
    <Link to={props.route}>
      <FloatingActionButton {...props.buttonProps} >
        <ArrowForward />
      </FloatingActionButton>
    </Link>
  </div>
)

export default ActionButton
