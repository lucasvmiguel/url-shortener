import React from 'react';
import PropTypes from 'prop-types';

const ShortenError = ({error, closeClick}) => (
  <div>
    <div className='flex-grid error-panel'>
      <p className='col error-panel-message'>
        {error === 400 && 'invalid parameters sent - maybe you need to insert a valid url'}
        {error === 500 && 'internal server error'}
      </p>
      {closeClick && <a className='col error-panel-close ' onClick={closeClick} >X</a>}
    </div>
  </div>
)

ShortenError.propTypes = {
  error: PropTypes.number.isRequired
};

export default ShortenError;