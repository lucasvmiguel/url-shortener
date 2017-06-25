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
import {urlSchema} from './shorten/schema';

import * as localRepo from './shorten/localRepository';
import * as mongoRepo from './shorten/mongoRepository';

let repo = null;

if (config.repository.type === 'local') {
  repo = localRepo;
} else {
  repo = mongoRepo;

  mongoose.connect(config.repository.mongo.connString);

  let db = mongoose.connection;

  db.on('error', (err) => {
    console.error('couldnt open connection with mongo:', err);
    process.exit(1);
  });

  db.once('open', () => console.log(`connected with mongo`));
}


setTimeout(() => {
  setInterval(() => refreshData(repo, config.urlApi), config.scheduleTime);
}, 10000);

const serverHttp = express();

serverHttp.use(cors());
serverHttp.use(bodyParser.json());
serverHttp.use(bodyParser.urlencoded({ extended: true }));
serverHttp.use((err, req, res, next) => {
  console.error('error: ', err.stack);
  res.status(500).send('internal server error');
});

serverHttp.get('/resource-status', (req, res) => res.status(200).send('status ok!'));

serverHttp.post('/shorten', createUrlHandler({urlApi: config.urlApi, host: config.http.host, repo: repo}));
serverHttp.get('/shorten', getAllUrlHandler(config.urlApi, repo));
serverHttp.delete('/shorten', deleteAllUrlHandler(repo));
serverHttp.get('/shorten/:shortcode', getUrlHandler(config.urlApi, repo));
serverHttp.all('*', (req, res) => res.status(404).send('not found'));

serverHttp.listen(config.http.host.split(':')[2], () => console.log(`server listening on ${config.http.host}!`));