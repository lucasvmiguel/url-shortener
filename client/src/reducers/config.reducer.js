import {SET_CONFIG} from '../types/config.type';

const initialState = {};

const shorten = (state = initialState, action) => {
  switch (action.type) {
  case SET_CONFIG:
    state = action.config;
    return state;
  default:
    return state;
  }
};

export default shorten;