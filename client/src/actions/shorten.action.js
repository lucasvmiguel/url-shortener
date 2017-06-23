import {GET_ALL_URLS, GET_ALL_URLS_SUCCESS, GET_ALL_URLS_ERROR} from '../types/shorten.type';

export const GetAllUrls = () => {
  return {type: GET_ALL_URLS};
};

export const GetAllUrlsSuccess = (urls) => {
  return {type: GET_ALL_URLS_SUCCESS, urls: urls};
};

export const GetAllUrlsError = (error) => {
  return {type: GET_ALL_URLS_ERROR, error: error};
};