import {getAllUrls, saveUrl, deleteUrls} from './api.service';

import {
  GetAllUrls, 
  GetAllUrlsSuccess, 
  GetAllUrlsError, 
  CreateUrl, 
  CreateUrlSuccess, 
  CreateUrlError,
  DeleteUrls,
  DeleteUrlsSuccess,
  DeleteUrlsError
} from '../actions/shorten.action';

export const getAllUrlsDispatch = ({apiUrl, dispatch}) => {
  dispatch(GetAllUrls())

  getAllUrls(apiUrl)
    .then((response) => {
      if (response.statusCode !== 200) return dispatch(GetAllUrlsError('status code was not 200'));
      
      dispatch(GetAllUrlsSuccess(JSON.parse(response.body)));

      return null;
    })
    .catch((err) => dispatch(GetAllUrlsError(err)));
};

export const saveUrlDispatch = ({apiUrl, url, dispatch}) => {
  dispatch(CreateUrl())

  saveUrl(apiUrl, url)
    .then((response) => {
      if (response.statusCode !== 201) return dispatch(CreateUrlError('status code was not 201'));
      
      dispatch(CreateUrlSuccess());

      getAllUrlsDispatch({apiUrl, dispatch});

      return null;
    })
    .catch((err) => dispatch(CreateUrlError(err)));
};

export const deleteUrlsDispatch = ({apiUrl, dispatch}) => {
  dispatch(DeleteUrls())

  deleteUrls(apiUrl)
    .then((response) => {
      if (response.statusCode !== 200) return dispatch(DeleteUrlsError('status code was not 200'));
      
      dispatch(DeleteUrlsSuccess());

      getAllUrlsDispatch({apiUrl, dispatch});

      return null;
    })
    .catch((err) => dispatch(DeleteUrlsError(err)));
};