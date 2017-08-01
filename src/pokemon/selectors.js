// @flow

import * as api from '../api'

export const getOnePokemon = (state, id) => state.byId[id]

export const getAllPokemon = state =>
  state.list.map(id => getOnePokemon(state, id))

export const getPokemonBySearchQuery = (state, searchQuery) => {
  const expression = new RegExp(`^.*${searchQuery}`, 'i')
  return getAllPokemon(state).filter(
    pokemon => pokemon.name.match(expression) !== null,
  )
}

export const getWeakAgainstPokemon = (state, id) =>
  api.getWeakAgainstPokemon(getAllPokemon(state), getOnePokemon(state, id))

export const getStrongAgainstPokemon = (state, id) =>
  api.getStrongAgainstPokemon(getAllPokemon(state), getOnePokemon(state, id))
