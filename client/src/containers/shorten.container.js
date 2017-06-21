import { connect } from 'react-redux';

import ShortenApp from '../components/ShortenApp.jsx';
// import {} from '../actions/shorten.action.js';

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.list,
    formUrl: state.formUrl,
    searchUrl: state.searchUrl
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ShortenApp);