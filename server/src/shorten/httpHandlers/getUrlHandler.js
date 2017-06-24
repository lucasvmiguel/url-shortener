import {isValidParam} from '../schema';
import {find, update} from '../repository';
import {fetchUrl} from '../api';

const getUrlHandler = (urlApi, repoType) => (req, res) => {
  if (!isValidParam(req.params)) return res.status(400).send('invalid params');

  const url = find(req.params.shortcode);

  if (!url) return res.status(404).send('url not found');

  fetchUrl({urlApi, shortcode: req.params.shortcode})
    .then(handleFetchUrlApiResponse({url, req, res}))
    .catch(handleFetchUrlApiError(res));
};

const handleFetchUrlApiResponse = ({url, req, res}) => (response) => {
  if (response.statusCode != 200) return res.status(500).send('internal server error');
  res.set('Location', url.urlExtended);
  res.status(302).send('');

  url.redirectCount++
  update(url);

  console.info('redirect url: ', url);
};

const handleFetchUrlApiError = (res) => (err) => {
  res.status(500).send('internal server error');
  console.error('error redirect: ', err);
};

export default getUrlHandler;