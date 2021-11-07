const { PROJECT_DIR } = require('settings')
const { coincapApiKey } =  require(PROJECT_DIR + '/config.js')
const { fetch } = require('cross-fetch')

const baseApi = '//api.coincap.io/v2/'

exports.getAvailableCrypto = async() => {
    const response = await(fetch(baseApi + 'assets?limit=5', {
        headers: {
            'Authorization': 'Bearer ' + coincapApiKey
        }
    }))

    if (response.status >= 400) {
        return 'An error has occurred, please contact support'
    }

    const data = await response.json()

    let cryptoCurrNames = ''
    // Loop on the json to get only the names of the crypto-currencies
    data.data.forEach(crypto => {
        cryptoCurrNames += `\n${crypto.name}`
    });

    return cryptoCurrNames
}