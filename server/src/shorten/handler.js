import * as api from './api.js';
import * as repository from './repository.js';

const ACTION_CREATE_URL = 'CREATE_URL';

const isValid = (message) => true;
const sendToClient = ({client, action, type, data}) => client.emit('event', {action: action, type: type, data: data});
const sendToClientSuccess = ({client, action, data}) => sendToClient({client, action, type: 'success', data});
const sendToClientError = ({client, action, data}) => sendToClient({client, action, type: 'error', data});

const createUrlRepositoryResponse = ({wsClient, urlCreated}) => (response) => {
  if (!response) throw 'error to save in repo';
  sendToClientSuccess({client: wsClient, action: ACTION_CREATE_URL, data: urlCreated});
};

const createUrlRepositoryResponseError = (wsClient) => (err) => {
  console.error(err);
  sendToClientError({client: wsClient, action: ACTION_CREATE_URL, data: err});
};

const createUrlApiResponse = ({wsClient, repoConn, url}) => (response) => {
  if (response.statusCode !== 201) throw 'error to call api';

  const urlCreated = {
    url: url, 
    shortUrl: response.body.shortcode,
    startDate: Date.now(),
    lastSeenDate: Date.now(),
    redirectCount: 0
  };

  repository.save({repoConn, urlObj: urlCreated})
    .then(createUrlRepositoryResponse({wsClient, urlCreated}))
    .catch(createUrlRepositoryResponseError(client));
};

const createUrlApiResponseError = (wsClient) => (err) => {
  console.error(err);
  sendToClientError({client: wsClient, action: ACTION_CREATE_URL, data: err});
};

export const handlerCreateUrl = ({wsClient, urlApi, repoConn}) => (message) => {
  if (!isValid(message)) return sendToClientError({client: client, action: ACTION_CREATE_URL, data: 'invalid params'});

  api.createUrl({urlApi, url: message.data.url})
    .then(createUrlApiResponse({wsClient, repoConn, url: message.data.url}))
    .catch(createUrlApiResponseError(client));
};

