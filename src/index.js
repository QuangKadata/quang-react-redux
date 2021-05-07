import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './includes/bootstrap';
import App from './App';
import {Provider} from 'react-redux';
import configureStore from './redux/configureStore';

import '@fortawesome/fontawesome-free/js/all'
import {BrowserRouter} from 'react-router-dom';

const store = configureStore();

ReactDOM.render(
 <Provider store={store}>
    <BrowserRouter>
    <App />
  </BrowserRouter>
 </Provider>,
  document.getElementById('root')
);