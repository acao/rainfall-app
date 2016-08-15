import React, { Component } from 'react'
import { Link } from 'react-router'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import RaisedButton from 'material-ui/RaisedButton'

import FullHeight from '../components/FullHeight'
import TopNav from '../components/TopNav'

import styles from "./styles";

const Choice = (props) => (
  <div style={{paddingBottom: 20}}>
    <Link to={props.route}> <RaisedButton label={props.label} fullWidth={true} /></Link>
  </div>
)

class Welcome extends Component {
  constructor(props, state){
    super(props, state)
  }
  render(){
    return (
        <FullHeight>
          <div style={{paddingBottom: 40}}>
            <span style={{color: "white", fontSize: 24}}>Rainfall-Counting Algorithm Calculator</span>
          </div>
          <div style={{paddingBottom: 40}}>
            <p style={{color: "white", fontSize: 16}}>The rainflow-counting algorithm (also known as the "rain-flow counting method") is used in the analysis of fatigue data in order to reduce a spectrum of varying stress into a set of simple stress reversals. </p>
          </div>
          <Choice route="/edit-data" label="Upload Data"  />
          <Choice route="/edit-data" label="Edit Data" />
       </FullHeight>
    )
  }
}

export default Welcome
