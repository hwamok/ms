import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise-middleware'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

const composeStoreWithMiddleware = applyMiddleware(
  promise,
)(createStore);

ReactDOM.render((
  <Provider store={composeStoreWithMiddleware(reducers)}>
    <App/>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();



