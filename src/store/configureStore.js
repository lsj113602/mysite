import { createStore, applyMiddleware } from 'redux'
import promiseMiddlewarePromise from 'redux-promise';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from './reducers'
export default function configureStore(initialState) {
  const middlewares = [
    promiseMiddleware(),
    promiseMiddlewarePromise
  ];
    console.log('promiseMiddleware-------:', promiseMiddleware());
    const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));
    // const store = createStore(rootReducer, initialState,
    // // 触发 redux-devtools
    // window.devToolsExtension ? window.devToolsExtension() : undefined
    // )
    return store
}