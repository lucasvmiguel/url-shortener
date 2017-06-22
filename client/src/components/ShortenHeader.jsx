import React from 'react';
import PropTypes from 'prop-types';

const ShortenHeader = ({title, description}) => (
  <div className='flex-grid flex-break padding-top-section'>
    <h1 className='col header-title'>{title}</h1>
    <p className='col header-description'>{description}</p>
  </div>
)

ShortenHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ShortenHeader;