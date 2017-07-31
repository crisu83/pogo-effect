export const SearchActions = {
  ACTIVATE: 'search/ACTIVATE',
  PERFORM: 'search/PERFORM',
  CLEAR: 'search/CLEAR'
};

export const activateSearch = () => ({
  type: SearchActions.ACTIVATE
});

export const performSearch = (query) => ({
  type: SearchActions.PERFORM,
  payload: query
});

export const clearSearch = () => ({
  type: SearchActions.CLEAR
});
