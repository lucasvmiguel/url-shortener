import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

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
setInterval(() => getAllUrlsDispatch({apiUrl: config.apiUrl, dispatch: store.dispatch}), config.scheduleTime);

//TODO: remove math.random, using that because container is not rerender
const render = () => ReactDOM.render(<ShortenContainer store={store} todo={Math.random()} />, document.getElementById('root'));

registerServiceWorker();

render();
store.subscribe(() => {
  console.log('CHANGED STATE:', store.getState());
  render(); 
});