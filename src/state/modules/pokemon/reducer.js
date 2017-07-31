import get from 'lodash/get';
import { combineReducers } from 'redux';
import { PokemonActions } from './actions';
import createMap from '../../reducers/map';
import createSet from '../../reducers/set';
import isActionOfType from '../../reducers/is-action-of-type';

const reducer = combineReducers({
  byId: createMap(
    isActionOfType(PokemonActions.GET_ALL),
    isActionOfType(PokemonActions.CLEAR),
    (state, action) => get(action, 'payload.entities.pokemon')
  ),
  ids: createSet(
    isActionOfType(PokemonActions.GET_ALL),
    isActionOfType(PokemonActions.CLEAR),
    (state, action) => get(action, 'payload.result')
  )
});

export default reducer;
