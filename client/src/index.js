import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import config from './config.json';
import shortenReducer from './reducers/shorten.reducer.js';
import {SetConfig} from './actions/shorten.action.js';
import ShortenContainer from './containers/shorten.container.js';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';


let store = createStore(shortenReducer, applyMiddleware(thunk));
window.store = store;

store.dispatch(SetConfig(config));

// debug
store.subscribe(() => console.log('STATE CHANGED: ', store.getState()));

const render = () => ReactDOM.render(<ShortenContainer store={store} />, document.getElementById('root'));

registerServiceWorker();

render();
store.subscribe(render);