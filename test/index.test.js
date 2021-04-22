import assert from 'assert';

import format from '../src/index';

describe('valid formatFloat test', () => {
  it('default', () => {
    assert.equal(200000.50, format("200.000,50"));
  });
  it('default', () => {
    assert.equal(2000000.50, format("2.000.000,50"));
  });
  it('default with space', () => {
    assert.equal(2000000.50, format(" 2.000.000,50 "));
  });
  it('float input', () => {
    assert.equal(0.234, format(0.234, null));
  });
  it('float input with round', () => {
    assert.equal(0.24, format(0.23756, 2));
  });
  it('float input without round', () => {
    assert.equal(0.23, format(0.23756, 2, undefined, undefined, false));
  });
  it('float input without thousands and round', () => {
    assert.equal(0.23, format("0.23756", 2, null, null, false));
  });
  it('float input without thousands and round', () => {
    assert.equal(0.23, format("0.23756", 2, undefined, '', false));
  });
  it('float input with 0', () => {
    assert.equal(0, format(0, 2));
  });
  it('string input with "0"', () => {
    assert.equal(0, format("0", 2));
  });
  it('negative float input', () => {
    assert.equal(-0.995, format(-0.995, 3));
  });
  it('negative float input with round', () => {
    assert.equal(-0.995, format(-0.9953, 3));
  });
  it('negative float input with round', () => {
    assert.equal(-0.995, format(-0.9955, 3));
  });
  it('negative float input with round', () => {
    assert.equal(0, format(-0.2, 0));
  });
});

describe('null formatFloat test', () => {
  it('undefinded value', () => {
    assert.equal(null, format(undefined));
  });
  it('null value', () => {
    assert.equal(null, format(null));
  });
  it('invalid string input', () => {
    assert.equal(null, format("asdfgk", 2));
  });
});
