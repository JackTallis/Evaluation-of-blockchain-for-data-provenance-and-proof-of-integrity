const { TransactionProcessor: MyTransactionProcessor } = require('sawtooth-sdk-js/processor')

const VALIDATOR_URL = 'tcp://localhost:4004'
const transactionProcessor = new MyTransactionProcessor(VALIDATOR_URL)

transactionProcessor.start();

//Handle stop process
process.on('SIGUSR2', () => {
    transactionProcessor._handleShutdown();
})
