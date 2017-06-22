import React from 'react';
import PropTypes from 'prop-types';

const ShortenHeader = ({title, description}) => (
  <div className='flex-grid padding-top-section'>
    <h1 className='col-0-6 header-title'>{title}</h1>
    <p className='col-0-6 header-description'>{description}</p>
  </div>
)

ShortenHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ShortenHeader;