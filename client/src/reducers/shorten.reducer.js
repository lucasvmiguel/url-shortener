import {GET_ALL_URLS, GET_ALL_URLS_SUCCESS, GET_ALL_URLS_ERROR} from '../types/shorten.type';

const initialState = {
  urls: [],
  formUrl: '',
  error: null,
  isLoading: false
};

const shorten = (state = initialState, action) => {
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
  default:
    return state;
  }
};

export default shorten;