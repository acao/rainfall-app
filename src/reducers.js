import { combineReducers } from 'redux'
import * as ActionTypes from './constants'


const initialState = {
  dataset: {
    results: [],
    valid: true,
    data: [[0,1,2,3,4,6,7,8,9,10,11,12], [0,200,-100,300,-200,100, -200, 200,-100,300,-200,100], [0,0.02,-0.01,0.03,-0.02,0.01, -0.1,0.02,-0.01,0.03,-0.02,0.01]]
  }
}

export const table = createReducer([], {
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

export const dataset = createReducer(initialState.dataset, {
  [ActionTypes.DATASET_SET](state, data) {
    return Object.assign({}, state, { data })
  },
  [ActionTypes.DATASET_VALIDATE](state, valid) {
    return [ ...state, { valid } ]
  },
  [ActionTypes.DATASET_CALCULATE](state, results) {
    return [ ...state,  { results } ]
  }
})

function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}
