import { combineReducers, applyMiddleware, createStore as rawCreateStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import createLoggerMiddleware from 'redux-logger';

import { default as pokemon } from './modules/pokemon/reducer';
import { default as search } from './modules/search/reducer';

/**
 * @returns {function}
 */
export const createStore = () => {
  const reducer = combineReducers({
    pokemon,
    search
  });

  const middlewares = [];

  middlewares.push(thunkMiddleware);
  middlewares.push(promiseMiddleware);

  // if (__DEV__) {
    middlewares.push(createLoggerMiddleware());
  // }

  return rawCreateStore(reducer, applyMiddleware(...middlewares));
};
