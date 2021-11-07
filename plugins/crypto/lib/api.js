const { PROJECT_DIR } = require('settings')
const { coincapApiKey } =  require(PROJECT_DIR + '/config.js')
const { fetch } = require('cross-fetch')

const baseApi = '//api.coincap.io/v2/'
const defaultAvailableCrypto = 20

exports.getAvailableCrypto = async(limit = defaultAvailableCrypto) => {
    if (limit <= 0 || limit > 200 || (typeof limit === "string" && !limit.match(/^[0-9]+$/))) {
        limit = defaultAvailableCrypto
    }

    const response = await(fetch(baseApi + `assets?limit=${limit}`, {
        headers: {
            'Authorization': 'Bearer ' + coincapApiKey
        }
    }))

    if (response.status >= 400) {
        return 'An error has occurred'
    }

    const data = await response.json()
    let cryptoCurrNames = ''
    // Loop on the json to get only the names of the crypto-currencies
    data.data.forEach((crypto, rank) => {
        cryptoCurrNames += `\n${rank+1}. ${crypto.name} (id : ${crypto.id})`
    });

    return cryptoCurrNames
}

exports.getInformationCrypto = async(id) => {
    const response = await(fetch(baseApi + `assets/${id}`, {
        headers: {
            'Authorization': 'Bearer ' + coincapApiKey
        }
    }))

    if (response.status >= 400) {
        return 'An error has occurred'
    }

    const data = await response.json()

    return data.data
}