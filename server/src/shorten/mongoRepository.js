import mongoose from 'mongoose';

import {urlSchema} from './schema.js';

const urlS = mongoose.model('urls', urlSchema);

export const save = (urlObj) => {
  return new urlS(urlObj).save();
};

export const update = ({shortcode, urlObj}) => {
  return new urlS(urlObj).update({shortcode: shortcode}, urlObj); 
};

export const all = () => {
  return urlS.find({});
};

export const find = (shortcode) => {
  return urlS.find({shortcode: shortcode});
};

export const removeAll = (shortcode) => {
  return urlS.remove({});
};