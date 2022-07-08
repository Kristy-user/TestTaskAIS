import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

import thunk from 'redux-thunk';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk))
  : compose(applyMiddleware(thunk));

export const store = createStore(rootReducer, composeEnhancers);
