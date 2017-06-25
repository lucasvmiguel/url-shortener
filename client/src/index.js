import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import R from 'ramda';

import config from './config.json';
import shortenReducer from './reducers/shorten.reducer';
import configReducer from './reducers/config.reducer';
import {SetConfig} from './actions/config.action';
import ShortenContainer from './containers/shorten.container';
import {getAllUrlsDispatch} from './services/dispatch.service';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';

let store = createStore(combineReducers({shorten: shortenReducer, config: configReducer}), applyMiddleware(thunk));

// easy to debug
window.store = store;

// set config in state
store.dispatch(SetConfig(config));

// get all urls in first render and after 1 minute
getAllUrlsDispatch({apiUrl: config.apiUrl, dispatch: store.dispatch});
// setInterval(() => getAllUrlsDispatch({apiUrl: config.apiUrl, dispatch: store.dispatch}), config.scheduleTime);

const render = (state) => {
  console.log('STATE CHANGED:' , state);
  ReactDOM.render(<ShortenContainer store={store} state={state}/>, document.getElementById('root'))
};

registerServiceWorker();

render(R.clone(store.getState()));
store.subscribe(() => {
  render(R.clone(store.getState()));
});