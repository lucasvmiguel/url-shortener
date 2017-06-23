import React from 'react';
import {connect} from 'react-redux';

import {ChangeUrlForm} from '../actions/shorten.action';
import {saveUrl, deleteUrls} from '../services/api.service';
import ShortenApp from '../components/ShortenApp';

const createUrl = (dispatch, getState) => {
  const state = getState();
  saveUrl({
    apiUrl: state.config.apiUrl,
    url: state.shorten.urlForm,
    dispatch
  });
};

const deleteAllUrls = (dispatch, getState) => {
  const state = getState();
  deleteUrls({
    apiUrl: state.config.apiUrl,
    dispatch
  });
};

const mapStateToProps = (state, ownProps) => {
  return {
    urls: state.shorten.urls,
    formUrl: state.shorten.formUrl,
    appUrl: state.config.appUrl
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickClear: () => dispatch(deleteAllUrls),
    onClickForm: () => dispatch(createUrl),
    onChangeForm: (url) => dispatch(ChangeUrlForm(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShortenApp);