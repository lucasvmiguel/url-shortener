import React from 'react';
import PropTypes from 'prop-types';

const ShortenItem = ({urlShorten}) => {
  return (
    <div>
      <div>{urlShorten.url}</div>
      <div>{urlShorten.visits}</div>
      <div>{urlShorten.lastVisited}</div>
    </div>
  );
}

ShortenItem.propTypes = {
  list: PropTypes.object.isRequired
}

export default ShortenItem;