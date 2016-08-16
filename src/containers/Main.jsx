import React from 'react'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { RouteTransition } from 'react-router-transition';
import { spring } from 'react-motion';

injectTapEventPlugin();

const Main = (props) => (
  <MuiThemeProvider style={{minHeight: "100%"}}>
    {props.children}
  </MuiThemeProvider>
)

const fadeConfig = { stiffness: 200, damping: 22 };
const popConfig = { stiffness: 360, damping: 25 };
const slideConfig = { stiffness: 330, damping: 30 };
const slideLeft = {
  atEnter: {
    opacity: 0,
    offset: 100
  },
  atLeave: {
    opacity: spring(0, fadeConfig),
    offset: spring(-100, slideConfig)
  },
  atActive: {
    opacity: spring(1, slideConfig),
    offset: spring(0, slideConfig)
  },
  mapStyles(styles) {
    return {
      opacity: styles.opacity,
      transform: `translateX(${styles.offset}%)`
    };
  }
};

export default Main
