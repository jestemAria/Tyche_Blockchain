const Transaction = require('./transaction');
const { STARTING_BALANCE } = require('../config');
const { ec, cryptoHash } = require('../util');

class Wallet {
    constructor() {
        this.balance = STARTING_BALANCE;

        this.keyPair = ec.genKeyPair();

        this.publicKey = this.keyPair.getPublic().encode('hex');
    }

    sign(data) {
        return this.keyPair.sign(cryptoHash(data))
    }

    createTransaction({ recipient, amount }) {
        if (amount > this.balance) {
            throw new Error('Amount exceeds balance');
        }

        return new Transaction({ senderWallet: this, recipient, amount });
    }

    static calculateBalance({ chain, address }) {
        let outputsTotal = 0;

        for (let index=1; index<chain.length; index++) {
            const block = chain[index];

            for (let transaction of block.data) {
                const addressOutput = transaction.outputMap[address];

                if (addressOutput) {
                    outputsTotal += addressOutput;
                }
            }
        }
        return STARTING_BALANCE + outputsTotal;
    }
}

module.exports = Wallet;