import React from 'react';
import PropTypes from 'prop-types';

const ShortenForm = (props) => (
  <form className='flex-grid shorten-form padding-top-section' onSubmit={props.onClick}>
    <input className="form-input-text col-0-9" type="text" name="url" value={props.url} onChange={props.onChange} />
    <input className="form-input-submit col-0-3" type="submit" value="Shorten this link" />
  </form>
);

ShortenForm.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  url: PropTypes.string
}

export default ShortenForm;