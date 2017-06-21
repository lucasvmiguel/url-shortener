import React from 'react';
import PropTypes from 'prop-types';

import ShortenHeader from './ShortenHeader';
import ShortenForm from './ShortenForm';
import ShortenClearSection from './ShortenClearSection';
import ShortenList from './ShortenList';

const ShortenApp = ({formUrl, searchUrl, list, onClickForm, onChangeForm, onClickClear, onClickSearch, onChangeSearch}) => (
  <div>
    <ShortenHeader title='Shooooort' description='The link shortener with a long name' />
    <ShortenForm url={formUrl} onClick={onClickForm} onChange={onChangeForm}/>
    <ShortenClearSection title='Previously shortened by you' onClick={onClickClear} />
    <ShortenList list={list} />
  </div>
)

ShortenApp.propTypes = {
  // props
  formUrl: PropTypes.string.isRequired,
  searchUrl: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,

  // function props
  onClickForm: PropTypes.func.isRequired,
  onChangeForm: PropTypes.func.isRequired,
  onClickClear: PropTypes.func.isRequired,
  onClickSearch: PropTypes.func.isRequired,
  onChangeSearch: PropTypes.func.isRequired
};

export default ShortenApp;