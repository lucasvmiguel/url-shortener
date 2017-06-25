'use strict';

const repo = require('../../dist/shorten/localRepository');
const expect = require('chai').expect;

describe('Local Repository Tests', () => { 
  it('should save and get all urls', () => {
    expect(repo.all()).to.be.empty;
    
    repo.save({shortcode: 'aa'});
    repo.save({shortcode: 'bb'});

    expect(repo.all()).to.not.be.empty;
    expect(repo.all()).to.have.lengthOf(2);

    repo.removeAll();
  });

  it('should remove all urls', () => {
    repo.save({shortcode: 'aa'});
    repo.save({shortcode: 'bb'});

    expect(repo.all()).to.not.be.empty;
    expect(repo.all()).to.have.lengthOf(2);

    repo.removeAll();

    expect(repo.all()).to.be.empty;
  });

  it('should find url', () => {
    const url1 = {shortcode: 'aa'};
    const url2 = {shortcode: 'bb'};
    
    repo.save(url1);
    repo.save(url2);

    const test1 = repo.find('aa');
    const test2 = repo.find('cc');

    expect(test1).to.deep.equal(url1);
    expect(test2).to.be.a('undefined');

    repo.removeAll();
  });


  it('should update url', () => {
    const url1 = {shortcode: 'aa'};
    const url2 = {shortcode: 'bb'};
    const url3 = {shortcode: 'cc'};
    
    repo.save(url1);
    repo.save(url2);
    repo.save(url3);

    repo.update({shortcode: 'bb', urlObj: url3});

    const urls = repo.all();

    expect(urls[0]).to.deep.equal(url1);
    expect(urls[1]).to.deep.equal(url3);
    expect(urls[2]).to.deep.equal(url3);

    repo.removeAll();
  });
});