import {connect} from 'react-redux';

import {ChangeUrlForm, DeleteError} from '../actions/shorten.action';
import {saveUrlDispatch, deleteUrlsDispatch} from '../services/dispatch.service';
import ShortenApp from '../components/ShortenApp';

const deleteAllUrls = (dispatch, getState) => {
  const state = getState();

  deleteUrlsDispatch({
    apiUrl: state.config.apiUrl,
    dispatch
  });

  return null;
};

const onClickForm = (e) => (dispatch, getState) => {
  e.preventDefault();

  const state = getState();

  saveUrlDispatch({
    apiUrl: state.config.apiUrl,
    url: state.shorten.urlForm,
    dispatch
  });

  return null;
}

const onChangeForm = (e) => (dispatch) => dispatch(ChangeUrlForm(e.target.value));

const mapStateToProps = (state, ownProps) => {
  return {
    urls: state.shorten.urls,
    urlForm: state.shorten.urlForm,
    error: state.shorten.error,
    appUrl: state.config.appUrl,
    timeStart: state.config.timeStart,
    isLoading: state.shorten.isLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickClear: () => dispatch(deleteAllUrls),
    onClickForm: (e) => dispatch(onClickForm(e)),
    onChangeForm: (e) => dispatch(onChangeForm(e)),
    onDeleteError: () => dispatch(DeleteError()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShortenApp);