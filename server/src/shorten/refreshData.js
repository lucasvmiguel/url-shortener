import {fetchUrlStats} from './api';

const handleFetchStatsApiError = (err) => console.error('error update stats: ', err);

const handleFetchStatsApiResponse = (repo, url) => (response) => {
  if (response.statusCode != 200) return console.error('error update stats: status code different than 200');

  const body = JSON.parse(response.body);

  url.lastSeenDate = body.lastSeenDate;
  url.redirectCount = body.redirectCount;

  repo.update({shortcode: url.shortcode, urlObj: url})
    .then((url) => console.info('updated url stat: ', url))
    .catch(handleFetchStatsApiError);
};

const handleGetAllUrls = (urlApi, repo) => (urls) => {
  urls.map((url) => {
    fetchUrlStats({urlApi, shortcode: url.shortcode})
      .then(handleFetchStatsApiResponse(repo, url))
      .catch(handleFetchStatsApiError);
  });
};

const refreshData = (repo, urlApi) => {
  repo.all()
    .then(handleGetAllUrls(urlApi, repo))
    .catch(handleFetchStatsApiError);
};

export default refreshData; 