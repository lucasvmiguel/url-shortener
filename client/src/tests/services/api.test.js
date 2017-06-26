import {__getAllUrlsReq, __saveUrlReq, __deleteUrlsReq} from '../../services/api.service';

const expect = require('chai').expect;

it('should return get all urls req', function () {
  const test = __getAllUrlsReq('http://foo');
  
  expect(test).to.deep.equal({ uri: 'http://foo/shorten', resolveWithFullResponse: true });
});

it('should return save url req', function () {
  const test = __saveUrlReq('http://foo', 'http://bar');
  
  expect(test).to.deep.equal({ 
    uri: 'http://foo/shorten',
    method: 'POST',
    body: { urlExtended: 'http://bar', shortcode: '' },
    json: true,
    resolveWithFullResponse: true });
});

it('should return get all urls req', function () {
  const test = __deleteUrlsReq('http://foo');
  
  expect(test).to.deep.equal({ uri: 'http://foo/shorten', method: 'DELETE', resolveWithFullResponse: true });
});
