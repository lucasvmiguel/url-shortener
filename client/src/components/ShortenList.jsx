import React from 'react';
import PropTypes from 'prop-types';

import ShortenItem from './ShortenItem';


const ShortenList = ({list}) => {
  return (
    <div>
      {list.map((urlShorten) => <ShortenItem urlShorten={urlShorten} />)}
    </div>
  );
}

ShortenList.propTypes = {
  list: PropTypes.array.isRequired
}

export default ShortenList;