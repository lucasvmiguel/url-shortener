import ShortenError from '../../components/ShortenError';

import {shallowRender} from '../utils';

const expect = require('chai').expect;

it('ShortenError should render correctly', function () {
  const props1 = {error: 400, closeClick: () => {}};
  const props2 = {error: 500};
  const shortenError1 = shallowRender(ShortenError, props1);
  const shortenError2 = shallowRender(ShortenError, props2);

  expect(shortenError1.props.children.props.children[0].props.children[0]).to.equal('invalid parameters sent - maybe you need to insert a valid url');
  expect(shortenError1.props.children.props.children).to.not.be.undefined;
  expect(shortenError2.props.children.props.children[0].props.children[1]).to.equal('internal server error');
  expect(shortenError2.props.children.props.children[1]).to.be.undefined;
});
