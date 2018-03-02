const moduleName = 'clean-directory';
const assert = require('assert');
const chai = require('chai');
const cp = require('cp');
const cpDir = require('copy-dir');
const cleanDirectory = require('../');
const path = require('path');

const should = chai.should();
const expect = chai.expect;
const testUtil = path.join(__dirname, 'test_util');
const testUtilContent = ['a.txt', 'b', 'c', 'd.txt'];
const cleanMe = path.join(__dirname, 'cleanMe');

describe('Parameters errors', () => {
  it('throw : path must be given', async () => {
    let threw = false;
    try {
      await cleanDirectory();
    } catch (error) {
      threw = true;
    }
    expect(threw).equal(true);
  });

  it('throw : fist param must be a string', async () => {
    let threw = false;
    try {
      await cleanDirectory(2);
    } catch (error) {
      threw = true;
    }
    expect(threw).equal(true);
  });

  it('throw : second param must be a callback', async () => {
    let threw = false;
    try {
      await cleanDirectory('', '');
    } catch (error) {
      threw = true;
    }
    expect(threw).equal(true);
  });

  it('throw : third param must be a callback', async () => {
    let threw = false;
    try {
      await cleanDirectory('', () => { }, '');
    } catch (error) {
      threw = true;
    }
    expect(threw).equal(true);
  });
});

describe('clean the directory', () => {
  beforeEach((done) => {
    cpDir(testUtil, cleanMe, (err) => {
      if (err) { return done(err); }
      return done();
    });
  });

  describe('clean', () => {
    it('with out filter', async () => {
      let results = await cleanDirectory(cleanMe);
      expect(results).to.deep.equal(testUtilContent);

      results = await cleanDirectory(cleanMe);
      expect(results).to.deep.equal([]);
    });

    it('with filter', async () => {
      const results = await cleanDirectory(cleanMe, {
        filter: file => file !== 'a.txt',
      });
      expect(results).to.deep.equal(['b', 'c', 'd.txt']);
    });
  });
});
