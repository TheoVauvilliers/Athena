const { fetchOneById, fetchWalletById } = require('../../../lib/userRepository.js')

exports.getWallet = (userId) => {
    if (fetchOneById(userId) && fetchWalletById(userId)) {
        return fetchWalletById(userId)
    }
}