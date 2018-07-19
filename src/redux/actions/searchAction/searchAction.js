export const FETCH_SEARCH_RESULTS = 'FETCH_SEARCH_RESULTS';
export const searchAction = id => ({
  type: FETCH_SEARCH_RESULTS,
  request: client => client(`/api/users?id=${id}`, { method: 'GET' }),
});

