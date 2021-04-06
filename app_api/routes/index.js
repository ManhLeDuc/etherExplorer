const express = require('express');
const router = express.Router();

const ctrlBlock = require('../controllers/block');
const ctrlContract = require('../controllers/contract');
const ctrlAddress = require('../controllers/address');
const ctrlTransaction = require('../controllers/transaction');

router
    .route('/block/:blockId')
    .get(ctrlBlock.getBlock);

router
    .route('/contract/:contractId')
    .get(ctrlContract.getContract);

router
    .route('/contract/:contractId/code')
    .get(ctrlContract.getCode);

router
    .route('/contract/:contractId/storage/:storageIndex')
    .get(ctrlContract.getStorage)

router
    .route('/address/:addressId')
    .get(ctrlAddress.getAddress);

router
    .route('/transaction/:transactionId')
    .get(ctrlTransaction.getTransaction);

module.exports = {
    router,
};