import { createAction } from 'redux-actions';
import { normalize } from 'normalizr';
import * as api from '../../../api';
import { arrayOfPokemonSchema } from '../../../constants';

export const PokemonActions = {
  GET_ALL: 'pokemon/GET_ALL',
  CLEAR: 'pokemon/CLEAR'
};

export const getAllPokemon = () => ({
  type: PokemonActions.GET_ALL,
  payload: normalize(api.getAllPokemon(), arrayOfPokemonSchema)
});
