import configReducer from '../../reducers/config.reducer';
import {SET_CONFIG} from '../../types/config.type';

const expect = require('chai').expect;

it('should return correctly reducer config', function () {
  const test1 = configReducer({}, {type: SET_CONFIG, config: {foo: 'bar'}});
  const test2 = configReducer({}, {type: SET_CONFIG, config: {}});
  const test3 = configReducer({}, {type: 'whatever', config: {}});

  expect(test1).to.deep.equal({foo: 'bar'});
  expect(test2).to.deep.equal({});
  expect(test3).to.deep.equal({});
});