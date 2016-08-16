import 'whatwg-fetch'
import { DATASET_SET, DATASET_VALIDATE, DATASET_CALCULATE } from './constants'

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

export function setOptions(options) {
  return {
    type: 'DATASET_SET_OPTIONS',
    options
  }
}

export function calculateData() {
  return (dispatch, getState) => {
    const data = getState().dataset.data
    fetch('http://localhost:9003/calculate/rainfall', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      dispatch(setResults(json))
    })
    .catch((ex) => {
      dispatch(() => {
        return {
          type: 'DATASET_VALIDATE',
          data: false,
          error: ex
        }
      })
    })
  }
}

// function datasetValidate(){
//   return {
//
//   }
// }
