/* eslint-disable */
import { createStore, applyMiddleware, compose } from 'redux';
// import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
// import createBrowserHistory from 'history/createBrowserHistory';
import { createLogger } from 'redux-logger'

import createApiMiddleware from './createApiMiddleware';
import api from './api';
import rootReducer from './reducers';

const initialState = {};
const enhancers = [];

const middleware = [
    createApiMiddleware(api),
    thunk,
];
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;
  if (typeof devToolsExtension === 'function') {
   enhancers.push(devToolsExtension())
  }
}
const logger = createLogger();
if (process.env.NODE_ENV === 'development') middleware.push(logger);

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);

export default store;
