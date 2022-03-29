import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import application from './features/application';

export const store = createStore(
  combineReducers({
    application,
  }),
  composeWithDevTools(applyMiddleware(thunk)),
);
