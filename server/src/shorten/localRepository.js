import * as R from 'ramda';

let urls = [];

export const save = (urlObj) => {
  urls = R.append(urlObj, urls);
};

export const update = ({shortcode, urlObj}) => {
  const index = R.findIndex(R.propEq('shortcode', shortcode))(urls);
  
  if (index !== -1) {
    urls = R.update(index, urlObj, urls);
    return R.indexOf(index, urls);
  }
};

export const all = () => {
  return R.clone(urls);
};

export const find = (shortcode) => {
  return R.find(R.propEq('shortcode', shortcode))(urls);
};

export const removeAll = (shortcode) => {
  urls = [];
};