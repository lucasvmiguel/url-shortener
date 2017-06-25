import ShortenClearSection from '../../components/ShortenClearSection';

import {shallowRender} from '../utils';

const expect = require('chai').expect;

it('ShortenClearSection should render correctly', function () {
  const props = {title: 'some title', onClick: () => {}};
  const shortenClearSection = shallowRender(ShortenClearSection, props);

  expect(shortenClearSection.props.children[0].type).to.equal('h3');
  expect(shortenClearSection.props.children[0].props.children).to.equal('some title');
  expect(shortenClearSection.props.children[1].type).to.equal('a');
  expect(shortenClearSection.props.children[1].props.children).to.equal('Clear history');
});
