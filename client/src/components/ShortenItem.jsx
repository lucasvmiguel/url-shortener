import React from 'react';
import PropTypes from 'prop-types';

import {timeSinceString} from '../services/datetime.service.js';

const ShortenItem = ({appUrl, url}) => {
  return (
    <div className='flex-grid'>
      <div className='col-0-8'>
        <p className="furfles">
          <strong>
            <a className='url-domain-link' href={url.urlShorten} target="_blank">{appUrl}/</a>
            <a className='url-shorten-link' href={url.url} target="_blank">{url.shortcode}</a>
          </strong> 
          <a className='click-to-copy-link' href="#">Click to copy this link</a>
        </p>
        <label className='url-extended-link'>{url.urlExtended}</label>
      </div>
      <div className='col-0-1 shorten-list-item-info align-center'>{url.redirectCount}</div>
      <div className='col-0-2 shorten-list-item-info align-center'>{timeSinceString(url.lastSeenDate)}</div>
    </div>
  );
}

ShortenItem.propTypes = {
  urlShorten: PropTypes.object.isRequired,
  appUrl: PropTypes.string.isRequired
}

export default ShortenItem;