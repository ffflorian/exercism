
const TwoFer = require('./two-fer');

describe('Two Fer', () => {
  const twoFer = new TwoFer();

  it('gives one to you if no parameter given', () => {
    expect(twoFer.twoFer()).toEqual('One for you, one for me.');
  });

  it('gives one to Alice if \'Alice\' is given', () => {
    expect(twoFer.twoFer('Alice')).toEqual('One for Alice, one for me.');
  });

  it('gives one to Bob if \'Bob\' is given', () => {
    expect(twoFer.twoFer('Bob')).toEqual('One for Bob, one for me.');
  });
});
