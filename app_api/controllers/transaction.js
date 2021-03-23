const Web3 = require('web3');
const etherUrl = require('./index');
const web3 = new Web3(etherUrl);

const getTransaction = (req, res) => {
    web3.eth.getTransaction(req.params.transactionId, (err, tnxInfo) => {
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
                    data: tnxInfo
                })
        }
    });
}

module.exports = {
    getTransaction
};