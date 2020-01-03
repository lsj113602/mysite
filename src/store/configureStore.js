import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise';
import rootReducer from './reducers'
export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, applyMiddleware(promiseMiddleware));
    // const store = createStore(rootReducer, initialState,
    // // 触发 redux-devtools
    // window.devToolsExtension ? window.devToolsExtension() : undefined
    // )
    return store
}