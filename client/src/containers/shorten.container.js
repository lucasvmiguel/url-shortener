import {connect} from 'react-redux';

import ShortenApp from '../components/ShortenApp.jsx';
import {CreateUrl, CreateUrlSuccess, CreateUrlFailure} from '../actions/shorten.action.js';

const createUrl = (dispatch, getState) => {
  dispatch(CreateUrl());
  const state = getState();
};

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.list,
    formUrl: state.formUrl,
    searchUrl: state.searchUrl,
    appUrl: state.config.appUrl
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickForm: () => dispatch(createUrl)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShortenApp);