// @flow

import {combineReducers, type Reducer} from 'redux'
import pokemonReducer from '../pokemon/reducer'
import searchReducer from '../search/reducer'
import type {RootState} from './types'

const createRootReducer = (): Reducer<RootState, *> =>
  combineReducers({
    pokemon: pokemonReducer,
    search: searchReducer,
  })

export default createRootReducer
