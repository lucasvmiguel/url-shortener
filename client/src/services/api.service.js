import request from 'request-promise';

export const getAllUrls = (apiUrl) => {
  const options = {
    uri: `${apiUrl}/shorten`,
    resolveWithFullResponse: true
  };

  return request(options);
};

export const saveUrl = (apiUrl, url) => {
  const options = {
    uri: `${apiUrl}/shorten`,
    method: 'POST',
    body: {
      "urlExtended": url,
      "urlShorten": ""
    },
    json: true,
    resolveWithFullResponse: true
  };

  return request(options);
};

export const deleteUrls = (apiUrl) => {
  const options = {
    uri: `${apiUrl}/shorten`,
    method: 'DELETE',
    resolveWithFullResponse: true
  };

  return request(options);
};