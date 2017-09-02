
import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from "react-redux";

import './index.css';

import App from './components/App/App';

import appStore from './redux-store-conf';


ReactDOM.render (
    <Provider store={appStore}>
        <App />
    </Provider>
    , document.getElementById('root')
);
