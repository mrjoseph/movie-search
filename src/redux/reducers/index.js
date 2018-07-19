import { combineReducers } from 'redux';
import searchReducer from './searchReducer/searchReducer';

const routeReducer = combineReducers({
  searchReducer: searchReducer,
});

export default routeReducer;
