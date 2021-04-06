const Web3 = require('web3');
const etherUrl = require('./index');
const web3 = new Web3(etherUrl);

const getContract = (req, res) => {
    web3.eth.getBalance(req.params.contractId, (err, balanceInfo) => {
        if (err) {
            res
                .status(404)
                .json({
                    success: false,

                })
        }
        else {
            res
                .status(200)
                .json({
                    success: true,
                    data: balanceInfo
                })
        }
    });
}

const getCode = (req, res) => {
    web3.eth.getCode(req.params.contractId, (err, byteCode) => {
        if (err) {
            res
                .status(404)
                .json({
                    success: false,

                })
        }
        else {
            res
                .status(200)
                .json({
                    success: true,
                    data: byteCode
                })
        }
    });
}

const getStorage = (req, res) => {
    web3.eth.getStorageAt(req.params.contractId, req.params.storageIndex, (err, data) => {
        if (err) {
            res
                .status(404)
                .json({
                    success: false,

                })
        }
        else {
            res
                .status(200)
                .json({
                    success: true,
                    data: data
                })
        }
    });
}



module.exports = {
    getContract,
    getCode,
    getStorage
};