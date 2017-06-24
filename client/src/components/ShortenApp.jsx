import React from 'react';
import PropTypes from 'prop-types';

import ShortenHeader from './ShortenHeader';
import ShortenForm from './ShortenForm';
import ShortenClearSection from './ShortenClearSection';
import ShortenList from './ShortenList';

const ShortenApp = ({formUrl, urls, appUrl, onClickForm, onChangeForm, onClickClear, onChangeSearch}) => (
  <div className='flex-grid'>
    <div className='col-0-3'></div>
    <div className='col-0-6'>
      <ShortenHeader title='Shooooort' description='The link shortener with a long name'  />
      <ShortenForm url={formUrl} onClick={onClickForm} onChange={onChangeForm} />
      <ShortenClearSection title='Previously shortened by you' onClick={onClickClear} />
      <ShortenList appUrl={appUrl} urls={urls} />
    </div>
    <div className='col-0-3'></div>
  </div>
)

ShortenApp.propTypes = {
  // props
  formUrl: PropTypes.string,
  searchUrl: PropTypes.string,
  list: PropTypes.array,

  // function props
  onClickForm: PropTypes.func,
  onChangeForm: PropTypes.func,
  onClickClear: PropTypes.func
};

export default ShortenApp;