const Blockchain = require('./blockchain');
const Block = require('./block');

describe('Blockchain', () => {
    const blockchain = new Blockchain();

    it('contains a `chain` array instance', () => {
        expect(blockchain.chain instanceof Array).toBe(true);
    });

    it('starts with the genesis block as the first block', () => {
        expect(blockchain.chain[0]).toEqual(Block.genesis());
    });

    it('adds a new block to the chain', () => {
        const newData = 'dummy_data';
        blockchain.addBlock({ data: newData });

        expect(blockchain.chain[blockchain.chain.length-1].data).toEqual(newData);
    });

    describe('isValidChain()', () => {
        describe('starts with genesis block and has multiple blocks', () => {
            describe('and a lastHash refrence has changed', () => {
                it('returns false', () => {});
            });

            describe('the chain contains a block with an invalid field', () => {
                it('returns false', () => {});
            });

            describe('the chain deos not contain any invalid blocks', () => {
                it('returns true', () => {});
            });
        });

        describe('chain does not starts with genesis block', () => {
            it('returns false', () => {});
        });
    });
});