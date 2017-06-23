import React from 'react';
import PropTypes from 'prop-types';

import ShortenItem from './ShortenItem';


const ShortenList = ({appUrl, urls}) => {
  return (
    <div>
      <div className='flex-grid padding-top-section'>
        <strong className='col-0-8 shorten-list-header'>LINK</strong>
        <strong className='col-0-1 shorten-list-header align-center'>VISITS</strong>
        <strong className='col-0-2 shorten-list-header align-center'>LAST VISITED</strong>
      </div>
      {urls.map((url) => <ShortenItem key={url.shortcode} appUrl={appUrl} url={url} />)}
    </div>
  );
}

ShortenList.propTypes = {
  appUrl: PropTypes.string.isRequired,
  urls: PropTypes.array.isRequired
}

export default ShortenList;