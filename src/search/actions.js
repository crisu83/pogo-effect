// @flow

import {type ActionCreator} from 'redux'
import type {
  ActivateSearchAction,
  PerformSearchAction,
  ClearSearchAction,
} from './types'

export const activateSearch: ActionCreator<
  ActivateSearchAction,
  void,
> = () => ({
  type: 'SEARCH_ACTIVATE',
})

export const performSearch: ActionCreator<
  PerformSearchAction,
  string,
> = query => ({
  type: 'SEARCH_PERFORM',
  payload: query,
})

export const clearSearch: ActionCreator<ClearSearchAction, void> = () => ({
  type: 'SEARCH_CLEAR',
})
