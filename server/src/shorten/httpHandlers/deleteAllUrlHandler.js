import {removeAll} from '../repository';

const deleteAllUrlHandler = () => (req, res) => {
  removeAll();
  res.status(200).send('');
};

export default deleteAllUrlHandler;