const Blockchain = require('./blockchain');

const blockchain = new Blockchain();

blockchain.addBlock({ data: 'initial' });

console.log('First block:', blockchain.chain[blockchain.chain.length - 1]);

let prevTimestamp, nextTimestamp, nextBlock, timeDiff, average;

const times = [];

for (let index=0; index<10000; index++){
    prevTimestamp = blockchain.chain[blockchain.chain.length-1].timestamp;

    blockchain.addBlock({ data: `block ${index}` });
    nextBlock = blockchain.chain[blockchain.chain.length-1];

    nextTimestamp = nextBlock.timestamp;
    timeDiff = nextTimestamp - prevTimestamp;
    times.push(timeDiff);

    average = times.reduce((total, next) => total + next) / times.length;

    console.log(`Time to mine block ${index + 2}: ${timeDiff}ms\t Difficulty: ${nextBlock.difficulty}\t Average time: ${average}ms`);
}