import React, { Component } from "react";
import Paper from "material-ui/Paper"
import styles from "./styles";

export default class FullHeight extends Component {
  constructor(props){
    super(props)
  }
  render(){
    const { props } = this;
    const { fullHeight } = styles;
    return (
      <Paper style={{...fullHeight.outer, ...props.outerStyles }} zDepth={0} rounded={false} >
          <div style={{...fullHeight.inner, ...props.innerStyles }} >
          {props.children}
          </div>
      </Paper>
    )
  }
}
