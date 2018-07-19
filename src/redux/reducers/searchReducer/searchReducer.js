import { FETCH_SEARCH_RESULTS } from '../../actions/searchAction/searchAction';

export const INITIAL_STATE = {};

const searchReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case `${FETCH_SEARCH_RESULTS}.SUCCESS`:
      return {
        ...state,
        ...action.result,
      };
    case `${FETCH_SEARCH_RESULTS}.FAILED`:
      return {
        ...state,
        ...action.result,
      };
    default:

      return state;
  }
};

export default searchReducer;
