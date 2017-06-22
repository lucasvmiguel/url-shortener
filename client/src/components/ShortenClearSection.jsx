import React from 'react';
import PropTypes from 'prop-types';

const ShortenClearSection = ({title, onClick}) => (
  <div className='flex-grid padding-top-section'>
    <h3 className='col-0-5 clear-section-title'>{title}</h3>
    <a onClick={onClick} href="#" className='col-0-5 clear-section-link'>Clear history</a>
  </div>
)

ShortenClearSection.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ShortenClearSection;