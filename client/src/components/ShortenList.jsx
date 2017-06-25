import React from 'react';
import PropTypes from 'prop-types';

import ShortenItem from './ShortenItem';


const ShortenList = ({appUrl, urls, timeStart}) => {
  return (
    <div>
      <div className='flex-grid padding-top-section'>
        <strong className='col-0-7 shorten-list-header'>LINK</strong>
        <strong className='col-0-1 shorten-list-header align-center'>VISITS</strong>
        <strong className='col-0-3 shorten-list-header align-center'>LAST VISITED</strong>
      </div>
      {urls.map((url) => <ShortenItem key={url.shortcode} appUrl={appUrl} url={url} timeStart={timeStart} />)}    
    </div>
  );
}

ShortenList.propTypes = {
  appUrl: PropTypes.string.isRequired,
  urls: PropTypes.array.isRequired,
  timeStart: PropTypes.instanceOf(Date).isRequired
}

export default ShortenList;