import React from 'react';
import PropTypes from 'prop-types';

const ShortenError = ({error, closeClick}) => (
  <div className='padding-top-section'>
    <div className='flex-grid error-panel'>
      <p className='col error-panel-message'>
        {error === 400 && 'invalid params sent'}
        {error === 500 && 'internal server error'}
      </p>
      {closeClick && <a className='col error-panel-close ' onClick={closeClick} >X</a>}
    </div>
  </div>
)

ShortenError.propTypes = {
  error: PropTypes.number.isRequired,
  closeClick: PropTypes.function
};

export default ShortenError;