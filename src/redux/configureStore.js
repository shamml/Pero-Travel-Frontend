import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import application from './features/application';
import admin from './features/admin';

export const store = createStore(
  combineReducers({
    application,
    admin,
  }),
  composeWithDevTools(applyMiddleware(thunk)),
);
