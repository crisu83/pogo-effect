/**
 * Creates a reducer that manages a map.
 *
 * @param {function(state, action)} shouldTurnOn
 * @param {function(state, action)} shouldTurnOff
 * @param {bool} defaultValue
 * @returns {function(state, action)}
 */
const createFlag = (shouldTurnOn, shouldTurnOff, defaultValue = false) =>
  (state = defaultValue, action) => {
    if (shouldTurnOn(state, action)) {
      return true;
    } else if (shouldTurnOff(state, action)) {
      return false;
    } else {
      return state;
    }
  };

export default createFlag;
