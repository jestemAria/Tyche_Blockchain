const MINE_RATE = 1000;
const INITIAL_DIFFICULTY = 3;

const GENESIS_DATA = {
    timestamp: 1,
    lastHash: '----',
    hash: '_hash_',
    data: [],
    difficulty: INITIAL_DIFFICULTY,
    nonce: 0
};

const STARTING_BALANCE = 8;

module.exports = { GENESIS_DATA , MINE_RATE , STARTING_BALANCE };
