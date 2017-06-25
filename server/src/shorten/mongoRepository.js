import mongoose from 'mongoose';


import {urlSchema} from './schema.js';

const urlS = mongoose.model('urls', urlSchema);

export const save = (urlObj) => {
  return new urlS(urlObj).save();
};

export const update = ({shortcode, urlObj}) => {
  return urlS.update({shortcode: shortcode}, urlObj); 
};

export const all = () => {
  return urlS.find({}).exec();
};

export const find = (shortcode) => {
  return urlS.findOne({shortcode: shortcode}).exec();
};

export const removeAll = (shortcode) => {
  return urlS.remove({});
};