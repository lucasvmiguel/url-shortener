import moment from 'moment';

const handleGetAllUrlHandlerResponse = (res) => (urls) => {
  console.log('get all urls: ', urls);

  const urlsChanged = urls.map((u) => {
    const startDate = (moment(u.startDate).unix() * 1000).toString();
    const lastSeenDate = (moment(u.lastSeenDate).unix() * 1000).toString();

    return {
      urlExtended: u.urlExtended,
      urlShorten: u.urlShorten,
      shortcode: u.shortcode,
      startDate: startDate,
      lastSeenDate: lastSeenDate,
      redirectCount: u.redirectCount
    };
  });

  res.status(200).send(urlsChanged);
};

const handleGetAllUrlHandlerError = (res) => (err) => {
  console.error('error to get all', err);
  res.status(500).send('internal server error');
};

const getAllUrlHandler = (urlApi, repo) => (req, res) => {
  // if (!isValidSearch(req.query)) return res.status(400).send('invalid params');

  repo.all()
    .then(handleGetAllUrlHandlerResponse(res))
    .catch(handleGetAllUrlHandlerError(res));
};

export default getAllUrlHandler;