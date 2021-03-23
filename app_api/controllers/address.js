const Web3 = require('web3');
const etherUrl = require('./index');
const web3 = new Web3(etherUrl);

const getAddress = (req, res) => {
    web3.eth.getBalance(req.params.addressId, (err, balanceInfo) => {
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

module.exports = {
    getAddress
};