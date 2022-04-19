import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import application from './features/application';
import admin from './features/admin';
import review from './features/review';
import tours from './features/tours';
import user from './features/user';
import { booking } from './features/booking';
import optional from './features/optional';

export const store = createStore(
  combineReducers({
    application,
    admin,
    tours,
    review,
    user,
    booking,
    optional,
  }),
  composeWithDevTools(applyMiddleware(thunk)),
);
