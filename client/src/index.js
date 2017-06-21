import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import shortenReducer from './reducers/shorten.reducer.js';
import ShortenContainer from './containers/shorten.container.js';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';

let store = createStore(shortenReducer, applyMiddleware(thunk));

// debug
store.subscribe(() => console.log('STATE CHANGED: ', store.getState()));

const render = () => ReactDOM.render(<ShortenContainer store={store} />, document.getElementById('root'));

registerServiceWorker();

render();
store.subscribe(render);