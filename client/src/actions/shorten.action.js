import {
  GET_ALL_URLS, 
  GET_ALL_URLS_SUCCESS, 
  GET_ALL_URLS_ERROR, 
  CREATE_URL, 
  CREATE_URL_SUCCESS, 
  CREATE_URL_ERROR, 
  CHANGE_URL_FORM,
  DELETE_URLS,
  DELETE_URLS_SUCCESS,
  DELETE_URLS_ERROR,
  DELETE_ERROR
} from '../types/shorten.type';

export const GetAllUrls = () => {
  return {type: GET_ALL_URLS};
};

export const GetAllUrlsSuccess = (urls) => {
  return {type: GET_ALL_URLS_SUCCESS, 
    urls: urls};
};

export const GetAllUrlsError = (error) => {
  return {type: GET_ALL_URLS_ERROR, error: error};
};

export const ChangeUrlForm = (url) => {
  return {type: CHANGE_URL_FORM, url: url};
};

export const CreateUrl = () => {
  return {type: CREATE_URL};
};

export const CreateUrlSuccess = () => {
  return {type: CREATE_URL_SUCCESS};
};

export const CreateUrlError = (error) => {
  return {type: CREATE_URL_ERROR, error: error};
};

export const DeleteUrls = () => {
  return {type: DELETE_URLS};
};

export const DeleteUrlsSuccess = () => {
  return {type: DELETE_URLS_SUCCESS};
};

export const DeleteUrlsError = (error) => {
  return {type: DELETE_URLS_ERROR, error: error};
};

export const DeleteError = (error) => {
  return {type: DELETE_ERROR};
};