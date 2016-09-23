import { combineReducers } from 'redux'
import * as ActionTypes from './constants'
import { routerReducer } from 'react-router-redux'
import moduleConfig from './module.config.js'
import { scenarios, cases } from './utils/fixtures'

const initialState = {
  dataset: {
    results: [],
    valid: true,
    data: [0,0,0]
  },
  ui: {
    leftNavOpen: false
  },
  modules: {
    availableModules: {
      [moduleConfig.key]: moduleConfig,
      hottap: {
        shortTitle: 'HotTap Calculator',
        title: 'HotTap'
      }
    },
    currentModule: {
      info: moduleConfig,
      scenarios,
      cases
    }
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

const modules = createReducer(initialState.modules, {
  [ActionTypes.CHOOSE_MODULE](state, action) {
    return Object.assign({}, state, { currentModule: state.availableModules[action.moduleKey] })
  }
})

const ui = createReducer(initialState.ui, {
  [ActionTypes.SET_UI_STATE](state, action) {
    console.log(state)
    return { ...state, ...action.data }
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
    return Object.assign({}, state, { results: data })
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

const rootReducer = combineReducers({
  dataset,
  table,
  ui,
  modules,
  routing: routerReducer
})

export default rootReducer
