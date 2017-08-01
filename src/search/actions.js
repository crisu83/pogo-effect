// @flow

import {type ActionCreator} from 'redux'

export const activateSearch: ActionCreator<Object, void> = () => ({
  type: 'SEARCH_ACTIVATE',
})

export const performSearch: ActionCreator<Object, {query: string}> = query => ({
  type: 'SEARCH_PERFORM',
  payload: query,
})

export const clearSearch: ActionCreator<Object, void> = () => ({
  type: 'SEARCH_CLEAR',
})
