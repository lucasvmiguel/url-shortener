import request from 'request-promise';

// export const fetch = ({urlApi, urlShorten}) => {
//   const options = {
//     uri: `${urlApi}/${urlShorten}`,
//     resolveWithFullResponse: true
//   }

//   return request(options);
// };

// export const fetchStats = ({urlApi, urlShorten}) => {
//   const options = {
//     uri: `${urlApi}/${urlShorten}/stats`,
//     resolveWithFullResponse: true
//   }

//   return request(options);
// };

export const create = ({urlApi, url, shortCode}) => {
  const options = {
    method: 'POST',
    uri: `${urlApi}/shorten`,
    body: (shortCode) ? {url: url, shortcode: shortCode} : {url: url},
    json: true,
    resolveWithFullResponse: true
  };

  return request(options);
};