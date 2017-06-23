import {isValidSearch} from '../schema';
import {all} from '../repository';

const getAllUrlHandler = (urlApi) => (req, res) => {
  if (!isValidSearch(req.query)) return res.send('invalid params', 400);

  const urls = all();

  for (let i = 0; i < urls.length; i++) {
    urls[i].urlShorten = `${urlApi}/${urls[i].shortcode}`
  }

  res.status(200).send(urls);
};

export default getAllUrlHandler;