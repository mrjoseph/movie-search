export const FETCH_USER_DETAILS = 'FETCH_USER_DETAILS';
export const userAction = id => ({
  type: FETCH_USER_DETAILS,
  request: client => client(`/api/users?id=${id}`, { method: 'GET' }),
});

