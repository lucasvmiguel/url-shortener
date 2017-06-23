import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import config from './config.json';
import shortenReducer from './reducers/shorten.reducer';
import configReducer from './reducers/config.reducer';
import {SetConfig} from './actions/config.action';
import ShortenContainer from './containers/shorten.container';
import {getAllUrls} from './services/api.service';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';

let store = createStore(combineReducers({shorten: shortenReducer, config: configReducer}), applyMiddleware(thunk));

// easy to debug
window.store = store;

store.dispatch(SetConfig(config));

// get all urls in first render
getAllUrls({apiUrl: config.apiUrl, dispatch: store.dispatch})

//TODO: remove math.random, using that because container is not rerender
const render = () => ReactDOM.render(<ShortenContainer store={store} todo={Math.random()} />, document.getElementById('root'));

registerServiceWorker();

render();
store.subscribe(() => {
  console.log('CHANGED STATE:', store.getState());
  render(); 
});