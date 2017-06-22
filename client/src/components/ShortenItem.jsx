import React from 'react';
import PropTypes from 'prop-types';

import {timeSinceString} from '../services/datetime.service.js';

const ShortenItem = ({appUrl, urlShorten}) => {
  return (
    <div className='flex-grid'>
      <div className='col-0-8 block-grid'>
        <p className="furfles">
          <strong>
            <a className='url-domain-link' href={`${appUrl}/${urlShorten.urlShorten}`} target="_blank">{appUrl}/</a>
            <a className='url-shorten-link' href={`${appUrl}/${urlShorten.urlShorten}`} target="_blank">{urlShorten.urlShorten}</a>
          </strong> 
          <a className='click-to-copy-link' href="#">Click to copy this link</a>
        </p>
        <label className='url-extended-link'>{urlShorten.urlExtended}</label>
      </div>
      <div className='col-0-1 shorten-list-item-info align-center'>{urlShorten.visits}</div>
      <div className='col-0-2 shorten-list-item-info align-center'>{timeSinceString(urlShorten.lastVisited)}</div>
    </div>
  );
}

ShortenItem.propTypes = {
  urlShorten: PropTypes.object.isRequired,
  appUrl: PropTypes.string.isRequired
}

export default ShortenItem;