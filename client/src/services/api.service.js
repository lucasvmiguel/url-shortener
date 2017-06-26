import request from 'request-promise';

export const __getAllUrlsReq = (apiUrl) => {
  return {
    uri: `${apiUrl}/shorten`,
    resolveWithFullResponse: true
  };
};

export const __saveUrlReq = (apiUrl, url) => {
  return {
    uri: `${apiUrl}/shorten`,
    method: 'POST',
    body: {
      "urlExtended": url,
      "shortcode": ""
    },
    json: true,
    resolveWithFullResponse: true
  };
};

export const __deleteUrlsReq = (apiUrl) => {
  return {
    uri: `${apiUrl}/shorten`,
    method: 'DELETE',
    resolveWithFullResponse: true
  };
};


export const getAllUrls = (apiUrl) => request(__getAllUrlsReq(apiUrl));

export const saveUrl = (apiUrl, url) => request(__saveUrlReq(apiUrl, url));

export const deleteUrls = (apiUrl) => request(__deleteUrlsReq(apiUrl));