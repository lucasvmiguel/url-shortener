import {timeSinceString} from '../../services/datetime.service';

const expect = require('chai').expect;

it('should return time since', function () {
  const test1 = timeSinceString(1498387113451, 1498387081974);
  const test2 = timeSinceString('1498387113451', '1498387081974');

  expect(test1).to.equal('31 seconds ago');
  expect(test2).to.equal('31 seconds ago');
});