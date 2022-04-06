import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import application from './features/application';
import admin from './features/admin';
import tours from './features/tours';
import user from './features/user';

export const store = createStore(
  combineReducers({
    application,
    admin,
    tours,
    user,
  }),
  composeWithDevTools(applyMiddleware(thunk)),
);
