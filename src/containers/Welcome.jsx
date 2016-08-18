import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'

import FullHeight from '../components/FullHeight'
import { setData } from '../actions'

import styles from './styles'
import { sampleDataSet } from '../utils/fixtures'
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward'

const Choice = (props) => (
  <div style={{ paddingBottom: 20 }}>
    <Link to={props.route}>
      <RaisedButton
        label={props.label}
        onTouchTap={props.onTouchTap}
        fullWidth={true}
        labelPosition="before"
        primary={false}
        icon={<ArrowForward />}
        style={styles.button}
      />
    </Link>
  </div>
)

class Welcome extends Component {
  constructor(props, state) {
    super(props, state)
  }
  render() {
    return (
        <FullHeight style={{ minHeight: '100%' }}>
          <div>
            <div style={{ padding: 30 }}>
              <span style={{ color: 'white', fontSize: '2em' }}>Rainfall-Counting Algorithm Calculator</span>
            </div>
            <div style={{ margin: 40 }}>
              <p style={{ color: 'white', fontSize: '1.1em' }}>
                The rainflow-counting algorithm (also known as the "rain-flow counting method") is used in the analysis of fatigue data in order to reduce a spectrum of varying stress into a set of simple stress reversals.
              </p>
            </div>
          </div>
          <div style={styles.welcomeActionArea}>
            {/*<Choice route="/upload-data" label="Upload Data"  />*/}
            <Choice route="/edit-data" label="New Dataset" onTouchTap={() => this.props.dispatch(setData([]))} />
            <Choice route="/edit-data" label="Edit Existing Data" />
            <Choice route="/upload-data" label="Upload Data" />
            <Choice route="/edit-data" label="Use Sample Data" onTouchTap={() => this.props.dispatch(setData(sampleDataSet))} />
          </div>
       </FullHeight>
    )
  }
}

export default connect()(Welcome)
