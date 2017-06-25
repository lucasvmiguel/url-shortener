import Pipeline from 'pipeline-js';

import {isValidParam} from '../schema';
import * as localRepo from '../localRepository';
import * as mongoRepo from '../mongoRepository';
import {fetchUrl} from '../externalApi';

const handleFetchUrlApiError = (res) => (err) => {
  res.status(500).send('internal server error');
  console.error('redirect url error: ', err);
};

const handleRepoUpdate = (url) => {
  console.info('redirect url: ', url);
}

const handleFetchUrlApiResponse = ({repo, url, req, res}) => (response) => {
  if (response.statusCode != 200) return res.status(500).send('internal server error');

  res.set('Location', url.urlExtended);
  res.status(302).send('');

  url.redirectCount++;
  
  repo.update({shortcode: url.shortcode, urlObj: url})
    .then(handleRepoUpdate)
    .catch((err) => console.info('update url error: ', url));
}

const handleGetUrlResponse = ({repo, urlApi, req, res}) => (url) => {
  fetchUrl({urlApi: urlApi, shortcode: url.shortcode})
    .then(handleFetchUrlApiResponse({repo, url, req, res}))
    .catch(handleFetchUrlApiError(res));
};

const getUrlHandler = (urlApi, repo) => (req, res) => {
  if (!isValidParam(req.params)) return res.status(400).send('invalid params');
  
  repo.find(req.params.shortcode)
    .then(handleGetUrlResponse({repo, urlApi, req, res}))
    .catch(handleFetchUrlApiError(res));
};

export default getUrlHandler;