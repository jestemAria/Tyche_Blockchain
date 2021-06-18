const Block = require('./Block');
const { GENESIS_DATA } = require('./config');
const cryptoHash = require('./crypto-hash');

describe('Block', () => {
    const timestamp = 'a-date'; 
    const lastHash = 'dummy_lastHash';
    const hash = 'dummy_hash';
    const data = ['Blockchain', 'data'];

    const nonce = 1;
    const difficulty = 1;

    const block = new Block({ timestamp, lastHash, hash, data, nonce, difficulty});

    it('has a timestamp, lastHash, hash, and data property', () => {
        expect(block.timestamp).toEqual(timestamp);
        expect(block.lastHash).toEqual(lastHash);
        expect(block.hash).toEqual(hash);
        expect(block.data).toEqual(data);
        expect(block.nonce).toEqual(nonce);
        expect(block.difficulity).toEqual(difficulty);
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

    describe('mineBlock()', () => {
        const lastBlock = Block.genesis();
        const data = 'mined data';
        const minedBlock = Block.mineBlock({ lastBlock, data });

        it('returns a Block instance', () => {
            expect(minedBlock instanceof Block).toBe(true);
        });

        it('sets the `lastHash` to be the `hash` of the last block', () => {
            expect(minedBlock.lastHash).toEqual(lastBlock.hash); 
        });

        it('sets the `data`', () => {
            expect(minedBlock.data).toEqual(data);
        });

        it('sets a `timestamp`', () => {
            expect(minedBlock.timestamp).not.toEqual(undefined);
        });

        it('creates a SHA-256 `hash` based on the proper inputs', () => {
            expect(minedBlock.hash).toEqual(cryptoHash(
                minedBlock.timestamp,
                lastBlock.hash,
                minedBlock.nonce, 
                minedBlock.difficulty,
                data
                )
            );
        });

        it('sets a `hash` that maches the difficulty creteria', () => {
            expect(minedBlock.hash.substring(0, minedBlock.difficulity)).toEqual(
                '0'.repeat(minedBlock.difficulity));
        });
    });
});
