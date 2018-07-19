import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import searchReducer from './searchReducer/searchReducer';

const routeReducer = combineReducers({
  router: routerReducer,
  searchReducer: searchReducer,
});

export default routeReducer;
