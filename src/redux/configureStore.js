import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import application from './features/application';
import tours from './features/tours'

export const store = createStore(
  combineReducers({
    application,
    tours
  }),
  composeWithDevTools(applyMiddleware(thunk)),
);
