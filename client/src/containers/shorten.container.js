import React from 'react';
import {connect} from 'react-redux';
import request from 'request-promise';

import ShortenApp from '../components/ShortenApp.jsx';
// import {CreateUrl, CreateUrlSuccess, CreateUrlFailure} from '../actions/shorten.action.js';

// get all urls in first render
// request(`${config.apiUrl}/shorten`)
//   .then((body) => {
//     const urls = JSON.parse(body);
//     store.dispatch(GetAllUrlsSuccess(urls));
//   })
//   .catch((err) => store.dispatch(GetAllUrlsError(err)));

const mapStateToProps = (state, ownProps) => {
  return {
    urls: state.shorten.urls,
    formUrl: state.shorten.formUrl,
    appUrl: state.config.appUrl
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // onClickForm: () => dispatch(getAllUrls)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShortenApp);