import {SET_CONFIG} from '../types/config.type';

export const SetConfig = (config) => {
  return {type: SET_CONFIG, config: config}
};