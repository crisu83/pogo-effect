// @flow

import type {Action} from '../types'

export type SearchState = {
  isActive: boolean,
  query: string,
}

export type ActivateSearchAction = Action<'SEARCH_ACTIVATE', void>
export type PerformSearchAction = Action<'SEARCH_PERFORM', string>
export type ClearSearchAction = Action<'SEARCH_CLEAR', void>
