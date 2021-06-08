const cryptoHash = require('./crypto-hash');

describe('cryptoHash()', () => {
    it('generates a SHA-256 hashed output', () => {
        expect(cryptoHash('dummy')).toEqual('b5a2c96250612366ea272ffac6d9744aaf4b45aacd96aa7cfcb931ee3b558259');
    });

    it('produces the same hash with the same input arguments in any kind of order.', () => {
        expect(cryptoHash('one', 'two', 'three')).toEqual(cryptoHash('three', 'one', 'two'));
    });
});