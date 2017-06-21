import React from 'react';
import PropTypes from 'prop-types';

const ShortenClearSection = ({title, onClick}) => (
  <div>
    <h2>{title}</h2>
    <button onClick={onClick}>Clear history</button>
  </div>
)

ShortenClearSection.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ShortenClearSection;