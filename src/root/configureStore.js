// @flow

import {createStore} from 'redux'
import createRootReducer from './createRootReducer'

const configureStore = () => {
  const rootReducer = createRootReducer()
  const store = createStore(rootReducer)

  if (module.hot) {
    // $FlowFixMe
    module.hot.accept('./createRootReducer', () => {
      const nextRootReducer = require('./createRootReducer').default()
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore
