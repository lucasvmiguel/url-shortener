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
  DELETE_URLS_ERROR
} from '../types/shorten.type';

const initialState = {
  urls: [],
  urlForm: '',
  error: null,
  isLoading: false
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
    state.urls = action.urls;
    return state;
  case GET_ALL_URLS_ERROR:
    state.isLoading = false;
    state.error = action.error;
    return state;
  case CHANGE_URL_FORM:
    state.urlForm = action.url;
    return state;
  case CREATE_URL:
    state.error = null;
    state.isLoading = true;
    return state;
  case CREATE_URL_SUCCESS:
    state.urlForm = '';
    state.isLoading = false;
    return state;
  case CREATE_URL_ERROR:
    state.error = action.error;
    state.isLoading = false;
    return state;
  case DELETE_URLS:
    state.error = null;
    state.isLoading = true;
    return state;
  case DELETE_URLS_SUCCESS:
    state.isLoading = false;
    return state;
  case DELETE_URLS_ERROR:
    state.error = action.error;
    state.isLoading = false;
    return state;
  default:
    return state;
  }
};

export default shorten;