import * as R from 'ramda';
import moment from 'moment';

let urls = [];

export const save = (urlObj) => {
  return new Promise((resolve, reject) => { 
    urls = R.append(urlObj, urls);
    resolve(urls);
  });
};

export const update = ({shortcode, urlObj}) => {
  return new Promise((resolve, reject) => {
    const index = R.findIndex(R.propEq('shortcode', shortcode))(urls);

    if (index !== -1) {
      urls = R.update(index, urlObj, urls);
      return resolve(R.indexOf(index, urls));
    }

    reject('notfound')
  });
};

export const all = () => {
  return new Promise((resolve, reject) => {
    resolve(R.clone(urls));
  });
};

export const find = (shortcode) => {
  return new Promise((resolve, reject) => {
    const url = R.find(R.propEq('shortcode', shortcode))(urls);

    if (!url) return reject('notfound');
    
    resolve(R.clone(url));
  });
};

export const removeAll = (shortcode) => {
  return new Promise((resolve, reject) => {
    urls = [];
    resolve();
  });
};