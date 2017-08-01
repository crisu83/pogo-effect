// @flow

import {type ActionCreator} from 'redux'
import {normalize} from 'normalizr'
import * as api from '../api'
import {arrayOfPokemonSchema} from './schema'

export const getAllPokemon: ActionCreator<Object, void> = () => ({
  type: 'POKEMON_GET_ALL',
  payload: normalize(api.getAllPokemon(), arrayOfPokemonSchema),
})
