import {isValidSearch} from '../schema';
import {all} from '../repository';

const getAllUrlHandler = (urlApi) => (req, res) => {
  if (!isValidSearch(req.query)) return res.status(400).send('invalid params');

  const urls = all();

  res.status(200).send(urls);
};

export default getAllUrlHandler;