import {isValidStructToCreate} from '../schema';
import {save} from '../repository';
import {create} from '../api';

const createUrlHandler = (urlApi, host) => (req, res) => {
  if (!isValidStructToCreate(req.body)) return res.status(400).send('invalid params');

  create(urlApi, req.body.urlExtended, req.body.shortcode)
    .then(handleCreateUrlApiResponse(res, host, req.body.urlExtended))
    .catch(handleCreateUrlApiError(res));
};

const handleCreateUrlApiResponse = (res, host, urlExtended) => (response) => {
  if (response.statusCode != 201) return res.status(500).send('internal server error');

  const url = {
    urlExtended: urlExtended,
    urlShorten: `${host}/shorten/${response.body.shortcode}`,
    shortcode: response.body.shortcode,
    startDate: Date.now(),
    lastSeenDate: Date.now(),
    redirectCount: 0
  };

  save(url);
  res.status(201).send('');
  console.info('created: ', url);
};

const handleCreateUrlApiError = (res) => (err) => {
  res.status(500).send('internal server error');
  console.error('error: ', err);
};

export default createUrlHandler;