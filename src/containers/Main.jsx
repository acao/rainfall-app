import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import theme, { gridOptions } from '../styles'
// import 'uikit/src/styles/css/fonts.css'
import LeftNav from '../components/LeftNav'
import './main.css'
import { withReflex } from 'reflexbox'

import { Grid } from 'react-inline-grid'

injectTapEventPlugin()

const Main = (props) => (
  <MuiThemeProvider muiTheme={getMuiTheme(theme)} style={{ minHeight: '100%' }}>
    <div>
      <LeftNav />
      {props.children}
    </div>
  </MuiThemeProvider>
)


export default withReflex()(Main)
