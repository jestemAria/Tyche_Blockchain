const Block = require('./Block');
const { GENESIS_DATA } = require('./config');

describe('Block', () => {
    const timestamp = 'a-date'; 
    const lastHash = 'dummy_lastHash';
    const hash = 'dummy_hash';
    const data = ['Blockchain', 'data'];

    const block = new Block({ timestamp, lastHash, hash, data});

    it('has a timestamp, lastHash, hash, and data property', () => {
        expect(block.timestamp).toEqual(timestamp);
        expect(block.lastHash).toEqual(lastHash);
        expect(block.hash).toEqual(hash);
        expect(block.data).toEqual(data);
    });

    describe('genesis()', () => {
        const genesisBlock = Block.genesis();

        it('returns a Block instance', () => {
            expect(genesisBlock instanceof Block).toBe(true);
        });

        it('returns the genesis data of genesis block', () => {
            expect(genesisBlock).toEqual(GENESIS_DATA);
        });
    });
});
