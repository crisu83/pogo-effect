// @flow

import {type Selector} from 'reselect'
import type {RootState} from '../root/types'

export const getIsSearchActive: Selector<RootState, void, boolean> = state =>
  state.search.isActive

export const getSearchQuery: Selector<RootState, void, string> = state =>
  state.search.query
