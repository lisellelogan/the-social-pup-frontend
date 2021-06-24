import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//redux
import { createStore } from 'redux';
import { rootReducer } from './reducers/rootReducer';
import { Provider } from 'react-redux';

let store = createStore(rootReducer)

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
