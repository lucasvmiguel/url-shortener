import * as localRepo from '../localRepository';
import * as mongoRepo from '../mongoRepository';

const handleDeleteAllResponse = (res) => () => {
  console.log('all deleted');
  res.status(200).send('');
};

const handleDeleteAllError = (res) => (err) => {
  console.log('all deleted error:', err);
  res.status(500).send('internal server error');
};

const deleteAllUrlHandler = (repo) => (req, res) => {
  repo.removeAll()
    .then(handleDeleteAllResponse(res))
    .catch(handleDeleteAllError(res));
};

export default deleteAllUrlHandler;