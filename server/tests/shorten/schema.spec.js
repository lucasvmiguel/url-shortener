'use strict'

const schema = require('../../dist/shorten/schema');
const expect = require('chai').expect;

describe('Schema Tests', () => { 
  it('should validate struct to create', () => {
    const test1 = {};
    const test2 = {urlExtended: 'http://localhost:3000', urlShorten: 99};
    const test3 = {urlExtended: 'http://localhost:3000', urlShorten: ''};

    expect(schema.isValidStructToCreate(test1)).to.be.false;
    expect(schema.isValidStructToCreate(test2)).to.be.false;
    expect(schema.isValidStructToCreate(test3)).to.be.true;
  })

  it('should validate params to find url', () => {
    const test1 = {};
    const test2 = {shortcode: ''};
    const test3 = {shortcode: 'aaa'};

    expect(schema.isValidParam(test1)).to.be.false;
    expect(schema.isValidParam(test2)).to.be.false;
    expect(schema.isValidParam(test3)).to.be.true;
  })
})