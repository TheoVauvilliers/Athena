const db = require('../db.json')

exports.fetch = () => db.users
exports.fetchOneById = (id) => db.users.find(user => user.id === id)

exports.fetchWalletById = (id) => db.users.find(user => user.id === id).wallet