import React from 'react';
import ReactDOM from 'react-dom';

import "babel-polyfill";

import {Provider} from 'react-redux';

import App from './component/App.jsx';

import {BrowserRouter} from 'react-router-dom';

import configureStore from './store/configureStore.jsx';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('react')
);

