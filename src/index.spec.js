import { describe, it, before } from 'mocha';
import chai from 'chai';
import sinon from 'sinon';
import getModifiedValue from './test';

chai.expect();

const expect = chai.expect;
const getValue = sinon.stub();

describe('test', () => {
  before(() => {
    getValue.reset();
  });

  describe('when base is equal to 2 getModifiedValue', () => {
    before(() => {
      getValue.returns(2);
    });

    it('returns 4', () => {
      // when
      const value = getModifiedValue({getValue});

      // then
      expect(value).to.be.equal(4);
    });
  });

  describe('when base is equal to 4 getModifiedValue', () => {
    before(() => {
      getValue.returns(4);
    });

    it('returns 8', () => {
      // when
      const value = getModifiedValue({getValue});

      // then
      expect(value).to.be.equal(8);
    });
  });
});
