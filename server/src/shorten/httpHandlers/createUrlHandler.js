import {isValidStructToCreate} from '../schema';
import * as localRepo from '../localRepository';
import * as mongoRepo from '../mongoRepository';
import {create} from '../externalApi';

const createUrlObj = ({urlExtended, host, shortcode}) => {
  return {
    urlExtended: urlExtended,
    urlShorten: `${host}/shorten/${shortcode}`,
    shortcode: shortcode,
    startDate: Date.now(),
    lastSeenDate: Date.now(),
    redirectCount: 0
  };
};

const handleCreateUrlApiResponse = ({repo, res, host, urlExtended}) => (response) => {
  if (response.statusCode != 201) return res.status(500).send('internal server error');

  const url = createUrlObj({urlExtended, host, shortcode: response.body.shortcode});

  repo.save(url)
    .then(() => {
      res.status(201).send('')
      console.info('created: ', url);
    })
    .catch(handleCreateUrlApiError(res));
};

const handleCreateUrlApiError = (res) => (err) => {
  res.status(500).send('internal server error');
  console.error('error: ', err);
};

const createUrl = ({repo, urlApi, host, req, res}) => {
  create(urlApi, req.body.urlExtended, req.body.shortcode)
    .then(handleCreateUrlApiResponse({repo, res, host, urlExtended: req.body.urlExtended}))
    .catch(handleCreateUrlApiError(res));
};

const createUrlHandler = ({urlApi, host, repo}) => (req, res) => {
  if (!isValidStructToCreate(req.body)) return res.status(400).send('invalid params');

  createUrl({repo, urlApi, host, req, res});
};

export default createUrlHandler;