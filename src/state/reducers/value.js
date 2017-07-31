/**
 *
 * @param {function(state, action)} shouldUpdate
 * @param {function(state, action)} shouldReset
 * @param {function(state, action)} getValue
 * @param {*} defaultValue
 * @returns {function(state, action)}
 */
const createValue = (shouldUpdate = () => true, shouldReset = () => false, getValue = (state, action) => action.payload, defaultValue = null) =>
  (state = defaultValue, action) => {
    if (shouldReset(state, action)) {
      return defaultValue;
    }

    if (!shouldUpdate(state, action)) {
      return state;
    }

    return getValue(state, action);
  };

export default createValue;
