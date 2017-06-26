import ShortenList from '../../components/ShortenList';

import {shallowRender} from '../utils';

const expect = require('chai').expect;

it('ShortenList should render correctly', function () {
  const props = {appUrl: 'http://localhost', timeStart: Date.now(), urls: [{shortcode: '1', url: 'http://foo'}, {shortcode: '2', url: 'http://bar'}]};
  const shortenList = shallowRender(ShortenList, props);

  expect(shortenList.props.children[1].props.children[0].props.children).to.equal('LINK');
  expect(shortenList.props.children[1].props.children[1].props.children).to.equal('VISITS');
  expect(shortenList.props.children[1].props.children[2].props.children).to.equal('LAST VISITED');
  
  expect(shortenList.props.children[2][0].props.appUrl).to.equal('http://localhost');
  expect(shortenList.props.children[2][0].props.url.url).to.equal('http://foo');
  expect(shortenList.props.children[2][1].props.appUrl).to.equal('http://localhost');
  expect(shortenList.props.children[2][1].props.url.url).to.equal('http://bar');
});
