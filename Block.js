class Block{
    constructor({ timestamp, lastHash, hash, data }){
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data; 
    }
}

const block1 = new Block({
    timestamp: '01/01/01',
    lastHash: 'dummy_lastHash',
    hash: 'dummy_hash',
    data: 'dummy_data'
});

console.log('block 1 :', block1);
