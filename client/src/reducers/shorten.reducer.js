import R from 'ramda';

import {
  GET_ALL_URLS, 
  GET_ALL_URLS_SUCCESS, 
  GET_ALL_URLS_ERROR, 
  CHANGE_URL_FORM, 
  CREATE_URL, 
  CREATE_URL_SUCCESS, 
  CREATE_URL_ERROR,
  DELETE_URLS,
  DELETE_URLS_SUCCESS,
  DELETE_URLS_ERROR,
  DELETE_ERROR
} from '../types/shorten.type';

const initialState = {
  urls: [],
  urlForm: '',
  error: null,
  isLoading: false,
  newUrl: false
};

const shorten = (state = initialState, action) => {
  console.log('ACTION: ', action.type);
  switch (action.type) {
  case GET_ALL_URLS:
    state.error = null;
    state.isLoading = true;
    return state;
  case GET_ALL_URLS_SUCCESS:
    state.isLoading = false;
    state.urls = R.reverse(action.urls);
    if (state.urls.length > 0 && state.newUrl) state.urls[0].newUrl = true;
    return state;
  case GET_ALL_URLS_ERROR:
    state.isLoading = false;
    state.error = action.error.statusCode;
    return state;
  case CHANGE_URL_FORM:
    state.urlForm = action.url;
    return state;
  case CREATE_URL:
    state.error = null;
    state.isLoading = true;
    state.newUrl = false;
    return state;
  case CREATE_URL_SUCCESS:
    state.urlForm = '';
    state.isLoading = false;
    state.newUrl = true;
    return state;
  case CREATE_URL_ERROR:
    state.error = action.error.statusCode;
    state.isLoading = false;
    state.newUrl = false;
    return state;
  case DELETE_URLS:
    state.error = null;
    state.isLoading = true;
    return state;
  case DELETE_URLS_SUCCESS:
    state.isLoading = false;
    return state;
  case DELETE_URLS_ERROR:
    state.error = action.error.statusCode;
    state.isLoading = false;
    return state;
  case DELETE_ERROR:
    state.error = null;
    return state;
  default:
    return state;
  }
};

export default shorten;