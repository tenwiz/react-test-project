import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import createRootReducer from './reducers'
import thunk from 'redux-thunk';

export const history = createBrowserHistory();

export default function configureStore() {
  const initialState = {};
  const enhancers = [];
  const middleware = [thunk, routerMiddleware(history)];

  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  const store = createStore(
    createRootReducer(history),
    initialState,
    compose(
      applyMiddleware(
        ...middleware
      ),
      ...enhancers
    ),
  )

  return store;
}