import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Browser } from 'react-router-dom'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store,persistor } from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <Browser>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Browser>
  </Provider>
  ,
  document.getElementById('root')
);
