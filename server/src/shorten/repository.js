import mongoose from 'mongoose';

import {schema} from './schema.js';

const urlSchema = mongoose.Schema(schema);
let urls = [];

export const save = (urlObj) => {
  // let urlSchemaObj = new urlSchema(urlObj);
  // return urlSchema.save();
  urls.push(urlObj);
};

export const update = ({shortcode, urlObj}) => {
    for (let i = 0; i < urls; i++) {
    if (urls[i].shortcode === shortcode) {
      return urls[i] = urlObj;
    }
  }
  return null;
};

export const all = () => {
  // return urlSchema.find();
  return urls;
};

export const find = (shortcode) => {
  // return urlSchema.find({urlShorten: urlShorten});
  for (let i = 0; i < urls.length; i++) {
    if (urls[i].shortcode == shortcode) {
      return urls[i];
    }
  }
  return null;
};

export const removeAll = (shortcode) => {
  urls = [];
};