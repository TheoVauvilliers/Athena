const { MessageEmbed } = require('discord.js');

exports.createCryptoEmbed = (data, avatar) => {
    return new MessageEmbed()
        .setColor('#c6b8b7')
        .setThumbnail(avatar)
        .setTitle(`${data.name} information`.toUpperCase())
        .setDescription(`${data.symbol}`)
        .addFields(
            { name: 'Current rank', value: `${data.rank}` },
            { name: 'Current unit price', value: `${parseFloat(data.priceUsd).toFixed(8)}$`, inline: true },
            { name: 'Rate last 24hr', value: `${parseFloat(data.changePercent24Hr).toFixed(4)}%`, inline: true },
        )
        .setTimestamp()
        .setFooter('By Athena x CoinCap API');
}

exports.createWalletEmbed = (currentWallet, avatar, username) => {
    const total = currentWallet.reduce((acc, crypto) => {
        return acc += crypto.amount * crypto.unitPrice
    }, 0)
    
    const fields = currentWallet.reduce((acc, crypto) => {
        acc.push({
            'name': crypto.id.toUpperCase(),
            'value': `${crypto.amount.toString()} for a sum if **$ ${(crypto.amount * crypto.unitPrice).toFixed(2)}**`,
            'inline': false
        })

        return acc
    }, [])

    let embed = new MessageEmbed()
        .setColor('#c6b8b7')
        .setThumbnail(avatar)
        .setTitle(`${username}'s wallet`.toUpperCase())
        .setDescription(`Your entire wallet is estimated at **$ ${(parseFloat(total).toFixed(2).toString())}**`)
        .addFields(fields)
        .setTimestamp()
        .setFooter('By Athena');

    return embed
}