import {
  cyan500, cyan700,
  grey100, grey300,
  grey400, grey500,
  white, darkBlack,
  fullBlack
} from 'material-ui/styles/colors'

import { fade } from 'material-ui/utils/colorManipulator'

import spacing from 'material-ui/styles/spacing'

export const brandColors = {
  green: 'rgb(0,74,63)',
  blue: 'rgb(0,51,127)',
  rust: 'rgb(167,63,16)'
}

import './css/fonts.css'

/**
 *  Light Theme is the default theme used in material-ui. It is guaranteed to
 *  have all theme variables needed for every component. Variables not defined
 *  in a custom theme will default to these values.
 */
export default {
  spacing: spacing,
  fontFamily: '"Proxima Nova", "Lucida Grande", "Trebuchet MS", sans-serif',
  palette: {
    primary1Color: brandColors.green,
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: brandColors.blue,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    secondaryTextColor: fade(darkBlack, 0.54),
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack
  }
}

export const gridOptions = {
  gutter: 0,
  margin: 0,
  list: [
    {
      name: 'phone',
      query: '(max-width: 479px)',
      margin: 0
    },
    {
      name: 'tablet',
      query: '(min-width: 480px) and (max-width: 1030px)',
      margin: 0
    },
    {
      name: 'desktop',
      query: '(min-width: 1031px)',
      margin: 12
    }
  ]
}
