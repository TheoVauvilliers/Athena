const { MessageEmbed } = require('discord.js');

exports.createCryptoEmbed = (data, avatar) => {
    return new MessageEmbed()
        .setColor('#c6b8b7')
        .setThumbnail(avatar)
        .setTitle(`${data.name} information`)
        .setDescription(`${data.symbol}`)
        .addFields(
            { name: 'Current rank', value: `${data.rank}` },
            { name: 'Current unit price', value: `${parseFloat(data.priceUsd).toFixed(8)}$`, inline: true },
            { name: 'Rate last 24hr', value: `${parseFloat(data.changePercent24Hr).toFixed(4)}%`, inline: true },
        )
        .setTimestamp()
        .setFooter('By Athena x CoinCap API');
}