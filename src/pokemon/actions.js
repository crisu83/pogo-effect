// @flow

import {type ActionCreator} from 'redux'
import {normalize} from 'normalizr'
import {findAllPokemon} from '../api'
import {arrayOfPokemonSchema} from './schema'
import type {GetAllPokemonAction} from './types'

export const getAllPokemon: ActionCreator<GetAllPokemonAction, void> = () => ({
  type: 'POKEMON_GET_ALL',
  payload: normalize(findAllPokemon(), arrayOfPokemonSchema),
})
