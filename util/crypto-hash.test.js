const cryptoHash = require('./crypto-hash');

describe('cryptoHash()', () => {
    it('generates a SHA-256 hashed output', () => {
        expect(cryptoHash('dummy'))
            .toEqual('ebbe2dfbb019b8256cb73d309d38f8478b7a3aec5aef544f1aa69087aedb713b');
    });

    it('produces the same hash with the same input arguments in any kind of order.', () => {
        expect(cryptoHash('one', 'two', 'three')).toEqual(cryptoHash('three', 'one', 'two'));
    });

    it('produces a unique hash when the properties have changed on an input', () => {
        const dummy = {};
        const originalHash = cryptoHash(dummy);
        dummy['a'] = 'a';

        expect(cryptoHash(dummy)).not.toEqual(originalHash);
    });
});