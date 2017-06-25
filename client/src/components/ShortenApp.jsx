import React from 'react';
import PropTypes from 'prop-types';

import ShortenHeader from './ShortenHeader';
import ShortenForm from './ShortenForm';
import ShortenError from './ShortenError';
import ShortenLoading from './ShortenLoading';
import ShortenClearSection from './ShortenClearSection';
import ShortenList from './ShortenList';

const ShortenApp = ({urlForm, error, urls, appUrl, isLoading, timeStart, onClickForm, onChangeForm, onClickClear, onChangeSearch, onDeleteError}) => (
  <div className='flex-grid'>
    <div className='panel-left'></div>
    <div className='panel-center'>
      <ShortenHeader title='Shooooort' description='The link shortener with a long name'  />
      <ShortenForm url={urlForm} onClick={onClickForm} onChange={onChangeForm} />
      {error && <ShortenError error={error} closeClick={onDeleteError}/>}
      {isLoading && <ShortenLoading />}
      <ShortenClearSection title='Previously shortened by you' onClick={onClickClear} />
      <ShortenList appUrl={appUrl} urls={urls} timeStart={timeStart}/>
    </div>
    <div className='panel-right'></div>
  </div>
);

ShortenApp.propTypes = {
  // props
  urlForm: PropTypes.string,
  searchUrl: PropTypes.string,
  error: PropTypes.number,
  list: PropTypes.array,
  isLoading: PropTypes.bool,
  timeStart: PropTypes.instanceOf(Date),

  // function props
  onClickForm: PropTypes.func,
  onChangeForm: PropTypes.func,
  onClickClear: PropTypes.func,
  onDeleteError: PropTypes.func,
};

export default ShortenApp;