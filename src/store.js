import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import * as storage from 'redux-storage'
import createEngine from 'redux-storage-engine-localforage'

const reducer = storage.reducer(rootReducer)

const optionalLocalForageConfig = {
  driver      : localforage.WEBSQL, // Force WebSQL
  name        : 'lman',
  version     : 1.0,
  size        : 4980736, // Size of database, in bytes. WebSQL-only for now.
  storeName   : 'lman-store', // Should be alphanumeric, with underscores.
  description : 'some description'
}

const engine = createEngine('lman-store', optionalLocalForageConfig)
const storageMiddleware = storage.createMiddleware(engine)

/**
 * Entirely optional, this tiny library adds some functionality to
 * your DevTools, by logging actions/state to your console. Used in
 * conjunction with your standard DevTools monitor gives you great
 * flexibility!
 */
const logger = createLogger()

const finalCreateStore = compose(
  // Middleware you want to use in development:
  applyMiddleware(logger, thunk, storageMiddleware),
  // Required! Enable Redux DevTools with the monitors you chose
  // DevTools.instrument()
)(createStore)

function configureStore(initialState) {
  const store = finalCreateStore(reducer, initialState)
  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('./reducers', () =>
      store.replaceReducer(storage.reducer(require('./reducers')))
    )
  }
  return store
}
export default configureStore()
