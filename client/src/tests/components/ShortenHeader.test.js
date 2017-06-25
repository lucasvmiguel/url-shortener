import ShortenHeader from '../../components/ShortenHeader';

import {shallowRender} from '../utils';

const expect = require('chai').expect;

it('ShortenHeader should render correctly', function () {
  const props = {title: 'some title', description: 'some description'};
  const shortenHeader = shallowRender(ShortenHeader, props);

  expect(shortenHeader.props.children[0].type).to.equal('h1');
  expect(shortenHeader.props.children[0].props.children).to.equal('some title');
  expect(shortenHeader.props.children[1].type).to.equal('p');
  expect(shortenHeader.props.children[1].props.children).to.equal('some description');
});
