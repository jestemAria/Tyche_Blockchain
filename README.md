# Tyche_Blockchain

This project is called Tyche Blockchain. It is based on JavaScript as the blockchain core.

## TODO:
* ### Part 1: _Blocks_
    * - [x] Create block class.
    * - [x] Create the genesis block.
    * - [x] Mine blocks.
    * - [x] Crypto hash and SHA-256.
    * - [x] Hash in mineBlock.
* ### Part 2: _Blockchain_
    * - [ ] Create Blockchain class.
    * - [ ] Ensure about chain validation.
    * - [ ] Ensure about chain replacement.
    * - [ ] Make blockchain a real chain connected to eatch other.
* ### part 3: _Proof-of-work_
    * - [ ] Create Proof-of-work structure and architecture.
    * - [ ] Make sure if proof-of-work is the best way for Tyche or other options.
    * - [ ] Set difficulty and nonce value.
    * - [ ] Dynamic difficulty and mine rate.
    * - [ ] Adjust the difficulty in mineBlock.
    * - [ ] Config average work script and binary hashes.
    * - [ ] Prevent difficulty jumps.
* ### Part 4: _API and networks_
    * - [ ] Setup API and express API.
    * - [ ] Post requests to mine a block.
    * - [ ] PubSub _still no idea what it is, i should read more letters._
    * - [ ] Setup a mini database.
    * - [ ] Broadcasting chain on API.
    * - [ ] Make peers and start broadcasting chain.
    * - [ ] Sync chain on connect.
    * - [ ] Avoid redundant interactions.
    * - [ ] ...
* ### Part 5: _Wallet, Keys and Transactions_
    * - [ ] Create wallet class.
    * - [ ] Create key pair and public key.
    * - [ ] Assinging data and verifying signatures.
    * - [ ] Make transaction objects and the output map.
    * - [ ] Make trassaction inputs.
    * - [ ] Validate transactions.
    * - [ ] Create wallets and wallet transactions.
    * - [ ] Handeling transactions with multiple outputs.
    * - [ ] Handeling transaction cases.
    * - [ ] ...
* ### Part 6: _Transaction Pool_
    * - [ ] Create transaction pool class and set transactions.
    * - [ ] API transactions and mine them.
    * - [ ] Handeling invalid transactions.
    * - [ ] Transaction updates in real-time.
    * - [ ] Getting transaction pool map.
    * - [ ] Broadcasting transactions.
    * - [ ] Sync transaction pool map on connect.
    * - [ ] ...
* ### Part 7: _Mining Transactions_
    * - [ ] Create Transaction miner class.
    * - [ ] Grab valid transactions.
    * - [ ] Configuring about reward transactions.
    * - [ ] Mine transactions endpoint.
    * - [ ] Clear recorded transactions on successful replace.
    * - [ ] Make sure about blockchain balance.
    * - [ ] Calculating the balance before each transaction.
    * - [ ] Create wallet-info request.
    * - [ ] Validating transaction data.
    * - [ ] Validating input balances.
    * - [ ] Prevent duplicate transactions in block.
    * - [ ] Validating transaction chain.
    * - [ ] ...
* ### Part 8: _Blockchain Front-End_
    * - [ ] Create all front-end with React.
    * - [ ] ...
* ### Part 9: _Cryptocurrency Front-End_
    * - [ ] Create all front-end with React.
    * - [ ] ...
* ### Part 10: _Other and Non-categorized ones_
    * - [ ] Set new ideas and features for Tyche.
    * - [ ] Make implementations and discuss about private or public architecture.
    * - [ ] Make GUI for blockchain.
    * - [ ] Make GUI for Tyche coin.