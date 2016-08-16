import { combineReducers } from 'redux'
import * as ActionTypes from './constants'
import { routerReducer } from 'react-router-redux'

const initialState = {
  dataset: {
    results: [],
    valid: true,
    data: []
  }
}

const table = createReducer([], {
  [ActionTypes.TABLE_CELL_SELECT](state, action) {
    const text = action.text.trim()
    return [ ...state, text ]
  },
  [ActionTypes.TABLE_CELL_CHANGE](state) {
    return [ ...state ]
  },
  [ActionTypes.TABLE_CELL_EXIT](state) {
    return [ ...state ]
  },
  [ActionTypes.TABLE_PASTE](state) {
    return [ ...state ]
  },
  [ActionTypes.TABLE_ADD_ROW](state) {
    return [ ...state ]
  },
  [ActionTypes.TABLE_DEL_ROW](state) {
    return [ ...state ]
  }
})

const dataset = createReducer(initialState.dataset, {
  [ActionTypes.DATASET_SET](state, data) {
    return Object.assign({}, state, { data: data.data })
  },
  [ActionTypes.DATASET_SET_OPTIONS](state, data) {
    return Object.assign({}, state, { options: data.options })
  },
  [ActionTypes.DATASET_VALIDATE](state, valid) {
    return [ ...state, { valid } ]
  },
  [ActionTypes.DATASET_CALCULATE_RESULTS](state, { data }) {
    console.log("results", data)
    return Object.assign({}, state, { results: data })
  }
})

function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    console.log(action.type);
    if (handlers.hasOwnProperty(action.type)) {
      console.log("returned a handler");
      return handlers[action.type](state, action)
    } else {
      console.log("nope");
      return state
    }
  }
}

const rootReducer = combineReducers({
  dataset,
  table,
  routing: routerReducer
})

export default rootReducer
