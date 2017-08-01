// @flow

import {combineReducers, type Reducer} from 'redux'
import type {MapOfPokemon} from './types'

const byIdReducer: Reducer<MapOfPokemon, *> = (state = {}, action) => {
  switch (action.type) {
    case 'POKEMON_GET_ALL':
      return action.payload.entities.pokemon
    default:
      return state
  }
}

const listReducer: Reducer<Array<string>, *> = (state = [], action) => {
  switch (action.type) {
    case 'POKEMON_GET_ALL':
      return action.payload.result
    case 'POKEMON_CLEAR':
      return []
    default:
      return state
  }
}

const pokemonReducer = combineReducers({
  byId: byIdReducer,
  list: listReducer,
})

export default pokemonReducer
