const { fetch } = require('cross-fetch')

const baseApi = '//api.coincap.io/v2/'
const defaultAvailableCrypto = 20
const errorMessage = 'An error has occurred'

exports.getAvailableCrypto = async(limit = defaultAvailableCrypto) => {
    if (limit <= 0 || limit > 200 || (typeof limit === "string" && !limit.match(/^[0-9]+$/))) {
        limit = defaultAvailableCrypto
    }

    const response = await fetch(baseApi + `assets?limit=${limit}`, {
        headers: {
            'Authorization': 'Bearer ' + process.env.COINCAP_API_KEY
        }
    })

    if (response.status >= 400) {
        return errorMessage
    }

    const data = await response.json()
    // Loop on the json to get only the names of the crypto-currencies
    const cryptoCurrNames = data.data.reduce((acc, crypto, index) => {
        return acc += `${index+1}. ${crypto.name} (id : ${crypto.id})\n`
    }, '')

    return cryptoCurrNames
}

exports.getInformationCrypto = async(id) => {
    const response = await fetch(baseApi + `assets/${id}`, {
        headers: {
            'Authorization': 'Bearer ' + process.env.COINCAP_API_KEY
        }
    })

    if (response.status >= 400) {
        return errorMessage
    }

    const data = await response.json()

    return data.data
}

exports.getPricesCrypto = async (currentWallet) => {
    let data = await getAllDataCrypto()

    if (data === errorMessage) {
        return errorMessage
    }

    let currentWalletWithPrices = []

    for (crypto in currentWallet) {
        const unitPrice = data.find(el => el.id === crypto)
        currentWalletWithPrices.push({
            'id': crypto,
            'amount': currentWallet[crypto],
            'unitPrice': parseFloat(unitPrice.priceUsd)
        })
    }

    return currentWalletWithPrices
}

getAllDataCrypto = async() => {
    const response = await fetch(baseApi + 'assets', {
        headers: {
            'Authorization': 'Bearer ' + process.env.COINCAP_API_KEY
        }
    })

    if (response.status >= 400) {
        return errorMessage
    }

    const data = await response.json()

    return data.data
}