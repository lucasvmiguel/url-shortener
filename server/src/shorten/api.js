import request from 'request-promise';

export const fetchUrl = ({urlApi, shortcode}) => {
  const options = {
    uri: `${urlApi}/${shortcode}`,
    resolveWithFullResponse: true
  }

  return request(options);
};

export const fetchUrlStats = ({urlApi, shortcode}) => {
  const options = {
    uri: `${urlApi}/${shortcode}/stats`,
    resolveWithFullResponse: true
  }

  return request(options);
};

export const create = (urlApi, {urlExtended, shortCode}) => {
  const options = {
    method: 'POST',
    uri: `${urlApi}/shorten`,
    body: (shortCode) ? {url: urlExtended, shortcode: shortCode} : {url: urlExtended},
    json: true,
    resolveWithFullResponse: true
  };

  return request(options);
};