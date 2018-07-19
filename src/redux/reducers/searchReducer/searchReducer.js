import { FETCH_USER_DETAILS } from '../../actions/searchAction/searchAction';

export const INITIAL_STATE = {};

const userReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case `${FETCH_USER_DETAILS}.SUCCESS`:
      return {
        ...state,
        ...action.result,
      };
    case `${FETCH_USER_DETAILS}.FAILED`:
      return {
        ...state,
        ...action.result,
      };
    default:

      return state;
  }
};

export default userReducer;
