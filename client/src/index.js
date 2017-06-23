import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import request from 'request-promise';

import config from './config.json';
import shortenReducer from './reducers/shorten.reducer.js';
import configReducer from './reducers/config.reducer.js';
import {SetConfig} from './actions/config.action.js';
import {GetAllUrls, GetAllUrlsSuccess, GetAllUrlsError} from './actions/shorten.action.js';
import ShortenContainer from './containers/shorten.container.js';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';


let store = createStore(combineReducers({shorten: shortenReducer, config: configReducer}), applyMiddleware(thunk));

// easy to debug
window.store = store;

store.dispatch(SetConfig(config));
store.dispatch(GetAllUrls())

// get all urls in first render
request(`${config.apiUrl}/shorten`)
  .then((body) => store.dispatch(GetAllUrlsSuccess(JSON.parse(body))))
  .catch((err) => store.dispatch(GetAllUrlsError(err)));

//TODO: remove math.random, using that because container is not rerender
const render = () => ReactDOM.render(<ShortenContainer store={store} todo={Math.random()} />, document.getElementById('root'));

registerServiceWorker();

render();
store.subscribe(() => {
  console.log('CHANGED STATE:', store.getState());
  render(); 
});