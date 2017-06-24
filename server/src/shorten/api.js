import request from 'request-promise';

export const __fetchUrl = ({urlApi, shortcode}) => {
  return {
    uri: `${urlApi}/${shortcode}`,
    resolveWithFullResponse: true
  };
}

export const __fetchUrlStatsReq = ({urlApi, shortcode}) => {
  return {
    uri: `${urlApi}/${shortcode}/stats`,
    resolveWithFullResponse: true
  };
};

export const __createReq = (urlApi, urlExtended, shortCode) => {
  return {
    method: 'POST',
    uri: `${urlApi}/shorten`,
    body: (shortCode) ? {url: urlExtended, shortcode: shortCode} : {url: urlExtended},
    json: true,
    resolveWithFullResponse: true
  }; 
};

export const fetchUrl = ({urlApi, shortcode}) => request(__fetchUrl({urlApi, shortcode}));

export const fetchUrlStats = ({urlApi, shortcode}) => request(__fetchUrlStatsReq({urlApi, shortcode}));

export const create = (urlApi, urlExtended, shortCode) => request(__createReq(urlApi, urlExtended, shortCode));