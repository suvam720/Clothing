import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middelware = [logger];

const store = createStore(rootReducer, applyMiddleware(...middelware));

export default store;
