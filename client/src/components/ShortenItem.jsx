import React from 'react';
import PropTypes from 'prop-types';

const ShortenItem = ({appUrl, urlShorten}) => {
  return (
    <div className='flex-grid'>
      <div className='col-0-8 block-grid'>
        <p>
          <a href="#">{appUrl}/{urlShorten.urlShorten}</a> <a href="#">Click to copy this link</a>
        </p>
        <label>{urlShorten.urlExtended}</label>
      </div>
      <div className='col-0-1 shorten-list-item-info align-center'>{urlShorten.visits}</div>
      <div className='col-0-2 shorten-list-item-info align-center'>{urlShorten.lastVisited}</div>
    </div>
  );
}

ShortenItem.propTypes = {
  urlShorten: PropTypes.object.isRequired,
  appUrl: PropTypes.string.isRequired
}

export default ShortenItem;