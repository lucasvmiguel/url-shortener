import ShortenLoading from '../../components/ShortenLoading';

import {shallowRender} from '../utils';

const expect = require('chai').expect;

it('ShortenError should render correctly', function () {
  const shortenLoading = shallowRender(ShortenLoading, {});

  expect(shortenLoading.props.children.props.children.props.children).to.equal('Loading...');
});
