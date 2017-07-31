import isArray from 'lodash/isArray';

const isActionOfType = (type) => (state, action) =>
   isArray(type) ? type.indexOf(action.type) !== -1 : action.type === type;

export default isActionOfType;
