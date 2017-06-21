import http from 'http';
import socketio from 'socket.io';
import mongoose from 'mongoose';

import config from './config.json';
import shortenHandler from './shorten/handler.js';

mongoose.connect(config.mongoConnString);
mongoose.Promise = global.Promise;

const serverHttp = http.createServer();
const ws = socketio(serverHttp);
const repoConn = mongoose.connection;
const urlApi = config.urlApi;

ws.on('connection', (wsClient) => {
  console.log('new wsClient');

  wsClient.on('CREATE_URL', shortenHandler({wswsClient, urlApi, repoConn}));

  wsClient.on('disconnect', (data) => console.log(data));
});

serverHttp.listen(config.port, () => {
  console.log(`listening in ${config.port}`)
});