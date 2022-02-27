class TransactionPool {
    constructor() {
        this.transactionMap = {};
    }

    setTransaction(transaction) {
        this.transactionMap[transaction.id] = transaction;
    }

    existingTransaction({ inputAddress }) {
        const transactions = Object.values(this.transactionMap);

        return transactions.find(t => t.input.address === inputAddress);
    }
}

module.exports = TransactionPool;