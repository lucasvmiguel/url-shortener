// import {isValidSearch} from '../schema';
import * as repoLocal from '../localRepository';
import * as repoMongo from '../mongoRepository';

const getAllUrlHandlerError = (res) => (error) => {
  console.error('error to get all', err);
  res.status(500).send('internal server error');
};

const getAllUrlHandler = (urlApi, repoType) => (req, res) => {
  // if (!isValidSearch(req.query)) return res.status(400).send('invalid params');

  if (repoType === 'local') return res.status(200).send(repoLocal.all());

  repoMongo.all()
    .then((urls) => res.status(200).send(urls))
    .catch(getAllUrlHandlerError(res));
};

export default getAllUrlHandler;