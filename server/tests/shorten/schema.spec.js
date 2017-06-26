'use strict';

const schema = require('../../dist/shorten/schema');
const expect = require('chai').expect;

describe('Schema Tests', () => { 
  it('should validate struct to create', () => {
    const test1 = {};
    const test2 = {urlExtended: 'http://globo.com', shortcode: 99};
    const test3 = {urlExtended: 'asdasdas', shortcode: ''};
    const test4 = {urlExtended: 'test.com', shortcode: ''};
    const test5 = {urlExtended: 'http://globo.com', shortcode: ''};
    const test6 = {urlExtended: 'http://www.globo.com', shortcode: ''};

    expect(schema.isValidStructToCreate(test1)).to.be.false;
    expect(schema.isValidStructToCreate(test2)).to.be.false;
    expect(schema.isValidStructToCreate(test3)).to.be.false;
    expect(schema.isValidStructToCreate(test4)).to.be.false;
    expect(schema.isValidStructToCreate(test5)).to.be.true;
    expect(schema.isValidStructToCreate(test6)).to.be.true;
  });

  it('should validate params to find url', () => {
    const test1 = {};
    const test2 = {shortcode: ''};
    const test3 = {shortcode: 'aaa'};

    expect(schema.isValidParam(test1)).to.be.false;
    expect(schema.isValidParam(test2)).to.be.false;
    expect(schema.isValidParam(test3)).to.be.true;
  });
});