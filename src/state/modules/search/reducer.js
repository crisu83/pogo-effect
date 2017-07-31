import { combineReducers } from 'redux';
import { SearchActions } from './actions';
import createFlag from '../../reducers/flag';
import createValue from '../../reducers/value';
import isActionOfType from '../../reducers/is-action-of-type';

const reducer = combineReducers({
  isActive: createFlag(
    isActionOfType(SearchActions.ACTIVATE),
    isActionOfType(SearchActions.CLEAR)
  ),
  query: createValue(
    isActionOfType(SearchActions.PERFORM),
    isActionOfType(SearchActions.CLEAR),
    (state, action) => action.payload,
    ''
  )
});

export default reducer;
