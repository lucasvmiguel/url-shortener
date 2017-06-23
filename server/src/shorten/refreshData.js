import {all, update} from './repository';
import {fetchStats} from './api';

const refreshData = (urlApi) => {
  const urls = all();
  
  urls.map((url) => {
    fetchStats({urlApi, shortcode: url.shortcode})
      .then(handleFetchStatsApiResponse(url))
      .catch(handleFetchStatsApiError);
  })
};

const handleFetchStatsApiResponse = (url) => (response) => {
  if (response.statusCode != 200) return console.error('error update stats: status code different than 200');

  const body = JSON.parse(response.body);

  url.startDate = body.startDate;
  url.lastSeenDate = body.lastSeenDate;
  url.redirectCount = body.redirectCount;

  update({shortcode: url.shortcode, urlObj: url});
  console.info('updated stats: ', url);
};

const handleFetchStatsApiError = (err) => {
  console.error('error update stats: ', err);
};

export default refreshData; 