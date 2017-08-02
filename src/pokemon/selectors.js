// @flow

import {filterWeakAgainstPokemon, filterStrongAgainstPokemon} from '../api'
import {createSelector, type Selector} from 'reselect'
import {getSearchQuery} from '../search/selectors'
import type {Pokemon, ListOfPokemon} from './types'
import type {RootState} from '../root/types'

export const getOnePokemon: Selector<RootState, {dex: string}, Pokemon> = (
  state,
  props,
) => state.pokemon.byDex[props.dex]

export const getAllPokemon: Selector<RootState, void, ListOfPokemon> = state =>
  state.pokemon.list.map(dex => getOnePokemon(state, {dex}))

export const getAllFinalStagePokemon: Selector<
  RootState,
  void,
  ListOfPokemon,
> = state => getAllPokemon(state).filter(pokemon => pokemon.finalStage)

export const getPokemonBySearchQuery: Selector<
  RootState,
  void,
  ListOfPokemon,
> = createSelector(
  [getAllFinalStagePokemon, getSearchQuery],
  (allPokemon, searchQuery) => {
    if (searchQuery.length === 0) {
      return allPokemon
    }
    const expression = new RegExp(`^${searchQuery}`, 'i')
    return allPokemon.filter(pokemon => pokemon.name.match(expression) !== null)
  },
)

export const getWeakAgainstPokemon: Selector<
  RootState,
  {dex: string},
  ListOfPokemon,
> = (state, props) =>
  filterWeakAgainstPokemon(
    getAllFinalStagePokemon(state),
    getOnePokemon(state, props),
  )

export const getStrongAgainstPokemon: Selector<
  RootState,
  {dex: string},
  ListOfPokemon,
> = (state, props) =>
  filterStrongAgainstPokemon(
    getAllFinalStagePokemon(state),
    getOnePokemon(state, props),
  )
