const { MessageEmbed } = require('discord.js');

exports.createCryptoEmbed = (data, interaction) => {
    return new MessageEmbed()
        .setColor('#c6b8b7')
        .setThumbnail(interaction.user.displayAvatarURL({ format: 'jpg' }))
        .setTitle(`${data.name} information`)
        .setDescription(`${data.symbol}`)
        .addFields(
            { name: 'Current rank', value: `${data.rank}` },
            { name: 'Current unit price', value: `${parseFloat(data.priceUsd).toFixed(8)}$`, inline: true },
            { name: 'Rate last 24hr', value: `${parseFloat(data.changePercent24Hr).toFixed(4)}%`, inline: true },
        )
        .setTimestamp()
        .setFooter('Made by Athéna x CoinCap API');
}