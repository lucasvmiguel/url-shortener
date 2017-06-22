import React from 'react';
import PropTypes from 'prop-types';

import ShortenItem from './ShortenItem';


const ShortenList = ({appUrl, list}) => {
  return (
    <div>
      <div className='flex-grid padding-top-section'>
        <strong className='col-0-8 shorten-list-header'>LINK</strong>
        <strong className='col-0-1 shorten-list-header align-center'>VISITS</strong>
        <strong className='col-0-2 shorten-list-header align-center'>LAST VISITED</strong>
      </div>
      {list.map((urlShorten) => <ShortenItem appUrl={appUrl} urlShorten={urlShorten} />)}
    </div>
  );
}

ShortenList.propTypes = {
  appUrl: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired
}

export default ShortenList;