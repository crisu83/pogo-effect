// @flow

import {combineReducers, type Reducer} from 'redux'

const isActiveReducer: Reducer<boolean, *> = (state = false, action) => {
  switch (action.type) {
    case 'SEARCH_ACTIVATE':
      return true
    case 'SEARCH_CLEAR':
      return false
    default:
      return state
  }
}

const queryReducer: Reducer<string, *> = (state = '', action) => {
  switch (action.type) {
    case 'SEARCH_PERFORM':
      return action.payload
    case 'SEARCH_CLEAR':
      return ''
    default:
      return state
  }
}

const searchReducer = combineReducers({
  isActive: isActiveReducer,
  query: queryReducer,
})

export default searchReducer
