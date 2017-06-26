import React from 'react';
import PropTypes from 'prop-types';

const ShortenClearSection = ({title, urls, onClick}) => (
  <div className='flex-grid clear-section padding-top-section'>
    <h3 className='col clear-section-title'>{title}</h3>
    {urls.length > 0 && <a onClick={onClick} className='col clear-section-link'>Clear history</a>}
  </div>
)

ShortenClearSection.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  urls: PropTypes.array.isRequired
}

export default ShortenClearSection;