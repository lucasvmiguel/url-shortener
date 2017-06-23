import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import config from './config.json';
import refreshData from './shorten/refreshData';
import createUrlHandler from './shorten/httpHandlers/createUrlHandler';
import getAllUrlHandler from './shorten/httpHandlers/getAllUrlHandler';
import deleteAllUrlHandler from './shorten/httpHandlers/deleteAllUrlHandler';
import getUrlHandler from './shorten/httpHandlers/getUrlHandler';

// mongoose.connect(config.mongo.connString);
// mongoose.Promise = global.Promise;

// db.on('error', (err) => {
//   console.error(`couldnt open connection with mongo ${err}`);
//   process.exit(1);
// });

// db.once('open', () => console.log(`connected with mongo`));

setTimeout(() => {
  setInterval(() => refreshData(config.urlApi), config.scheduleTime);
}, 10000);

const serverHttp = express();

serverHttp.use(cors());
serverHttp.use(bodyParser.json());
serverHttp.use(bodyParser.urlencoded({ extended: true }));
serverHttp.use((err, req, res, next) => {
  console.error('error: ', err.stack);
  res.status(500).send('internal server error');
});

serverHttp.get('/resource-status', (req, res) => res.send('status ok!'));

serverHttp.post('/shorten', createUrlHandler(config.urlApi, config.http.host));
serverHttp.get('/shorten', getAllUrlHandler(config.urlApi));
serverHttp.delete('/shorten', deleteAllUrlHandler());
serverHttp.get('/shorten/:shortcode', getUrlHandler(config.urlApi));
serverHttp.all('*', (req, res) => res.send('not found', 404));

serverHttp.listen(config.http.host.split(':')[2], () => console.log(`server listening on ${config.http.host}!`));