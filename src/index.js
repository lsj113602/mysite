import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
// import 'lib-flexible'
import './index.css';
import App from './containers/App';
//import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';

const MOUNT_NODE = document.getElementById('root');

const initialState = {};
const store = configureStore(initialState);

const Render = () => {
  ReactDOM.render(
    <CookiesProvider>
      <Provider store={store}>
        <App />
      </Provider>
   </CookiesProvider>,
    MOUNT_NODE
  );
};

Render();

//serviceWorker.unregister();
