const Web3 = require('web3');
const etherUrl = require('./index');
const web3 = new Web3(etherUrl);

const getBlock = (req, res) => {
    web3.eth.getBlock(req.params.blockId, (err, blockInfo) => {
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
                    data: blockInfo
                })
        }
    });

}

module.exports = {
    getBlock
};