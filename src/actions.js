import 'whatwg-fetch'
import { calc } from './utils/http'
import { processFileInput } from './utils/file'

const debug = require('debug')('actions')

export function setData(data) {
  return {
    type: 'DATASET_SET',
    data
  }
}
export function setResults(data) {
  return {
    type: 'DATASET_CALCULATE_RESULTS',
    data
  }
}
export function setUIState(data) {
  return {
    type: 'SET_UI_STATE',
    data
  }
}

export function calculateData() {
  return (dispatch, getState) => {
    const data = getState().dataset.data
    const getResults = calc(data)
    getResults.then((data)=> {
      dispatch(setResults(data))
    })
    .catch((err)=> {
      dispatch(() => {
        debug(err)
        return {
          type: 'DATASET_VALIDATE',
          data: false
        }
      })
    })
  }
}

export function importFiles(files) {
  return (dispatch) => {
    const processFiles = processFileInput(files)
    processFiles.then((data) => {
      dispatch(setData(data))
    })
    .catch((err) => {
      debug(err)
    })
  }
}
