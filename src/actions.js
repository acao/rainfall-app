import fetch from 'whatwg-fetch'
import { DATASET_SET, DATASET_VALIDATE, DATASET_CALCULATE } from './constants'

export function setData(data) {
  return (dispatch) => {
    dispatch({
      type: DATASET_SET,
      data
    })
  }
}

export function calculateData() {
  console.log("calculating data")
  return (dispatch, getState) => {
    const data = getState().data;
    console.log(data);
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
      console.log('parsed json', json)
      // dispatch({
      //   type: DATASET_VALIDATE,
      //   data: true
      // })
      dispatch({
        type: DATASET_CALCULATE,
        data: json
      })
    })
    .catch((ex) => {
      console.log('parsing failed', ex)
      dispatch({
        type: DATASET_VALIDATE,
        data: false
      })
    })
  }
}
