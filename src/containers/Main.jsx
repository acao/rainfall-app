import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

const Main = (props) => (
  <MuiThemeProvider style={{ minHeight: '100%' }}>
    {props.children}
  </MuiThemeProvider>
)


export default Main
