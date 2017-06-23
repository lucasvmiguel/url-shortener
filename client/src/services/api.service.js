import request from 'request-promise';

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

export const getAllUrls = ({apiUrl, dispatch}) => {
  const options = {
    uri: `${apiUrl}/shorten`,
    resolveWithFullResponse: true
  };

  dispatch(GetAllUrls())

  request(options)
    .then((response) => {
      if (response.statusCode != 200) return dispatch(GetAllUrlsError('status code was not 200'));
      
      dispatch(GetAllUrlsSuccess(JSON.parse(response.body)));
    })
    .catch((err) => dispatch(GetAllUrlsError(err)));
};

export const saveUrl = ({apiUrl, url, dispatch}) => {
  const options = {
    uri: `${apiUrl}/shorten`,
    method: 'POST',
    body: {
      "urlExtended": url,
      "urlShorten": "",
      "startDate": Date.now(),
      "lastSeenDate": "",
      "redirectCount": 0
    },
    json: true,
    resolveWithFullResponse: true
  };

  dispatch(CreateUrl())

  request(options)
    .then((response) => {
      if (response.statusCode != 201) return dispatch(CreateUrlError('status code was not 201'));
      
      dispatch(CreateUrlSuccess());
    })
    .then(() => getAllUrls({apiUrl, dispatch}))
    .catch((err) => dispatch(CreateUrlError(err)));
};

export const deleteUrls = ({apiUrl, dispatch}) => {
  const options = {
    uri: `${apiUrl}/shorten`,
    method: 'DELETE',
    resolveWithFullResponse: true
  };

  dispatch(DeleteUrls())

  request(options)
    .then((response) => {
      if (response.statusCode != 200) return dispatch(DeleteUrlsError('status code was not 200'));
      
      dispatch(DeleteUrlsSuccess());
    })
    .then(() => getAllUrls({apiUrl, dispatch}))
    .catch((err) => dispatch(DeleteUrlsError(err)));
};