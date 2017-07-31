import uniq from 'lodash/uniq';
import createValue from './value';

/**
 *
 * @param {(state, action)} shouldUpdate
 * @param {(state, action)} shouldReset
 * @param {(state, action)} getValues
 * @returns {(state, action)}
 */
const createSet = (shouldUpdate = () => true, shouldReset = () => false, getValues = (state, action) => action.payload) =>
  createValue(shouldUpdate, shouldReset, (state, action) => uniq([...state, ...getValues(state, action)]), []);

export default createSet;
