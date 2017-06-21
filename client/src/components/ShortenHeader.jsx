import React from 'react';
import PropTypes from 'prop-types';

const ShortenHeader = ({title, description}) => (
  <div>
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
)

ShortenHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ShortenHeader;