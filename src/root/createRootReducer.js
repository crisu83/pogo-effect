// @flow

import {combineReducers} from 'redux'
import pokemonReducer from '../pokemon/reducer'
import searchReducer from '../search/reducer'

const createRootReducer = () =>
  combineReducers({
    pokemon: pokemonReducer,
    search: searchReducer,
  })

export default createRootReducer
