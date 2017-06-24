'use strict'

const api = require('../../dist/shorten/api');
const expect = require('chai').expect;

describe('API  Tests', () => { 
  it('should create req fetch url', () => {
    const test = api.__fetchUrl({urlApi: 'http://localhost:3000', shortcode: 'aaa'})
    const assert = {uri: 'http://localhost:3000/aaa',resolveWithFullResponse: true};

    expect(test).to.deep.equal(assert);
  })

  it('should create req fetch url stats', () => {
    const test = api.__fetchUrlStatsReq({urlApi: 'http://localhost:3000', shortcode: 'aaa'})
    const assert = {uri: 'http://localhost:3000/aaa/stats',resolveWithFullResponse: true};

    expect(test).to.deep.equal(assert);
  })

  it('should create req to create url', () => {
    const test1 = api.__createReq('http://localhost:3000', 'http://localhost:5000', 'aaa');
    const test2 = api.__createReq('http://localhost:3001', 'http://localhost:5001');

    const assert1 = {
      method: 'POST',
      uri: 'http://localhost:3000/shorten',
      body: {url: 'http://localhost:5000', shortcode: 'aaa'},
      json: true,
      resolveWithFullResponse: true
    }; 

    const assert2 = {
      method: 'POST',
      uri: 'http://localhost:3001/shorten',
      body: {url: 'http://localhost:5001'},
      json: true,
      resolveWithFullResponse: true
    }; 

    expect(test1).to.deep.equal(assert1);
    expect(test2).to.deep.equal(assert2);
  })

})