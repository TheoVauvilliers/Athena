const { SlashCommandBuilder } = require('@discordjs/builders')
const { createWalletEmbed } = require('../lib/embeds.js')
const { getPricesCrypto } = require('../lib/api.js')
const { getWallet } = require('../lib/db.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('wallet')
		.setDescription('Use this command to display your wallet as well as the value of your cryptocurrency'),
	async execute(interaction) {
		let currentWallet = getWallet(interaction.user.id)
		let currentWalletWithPrices = await getPricesCrypto(currentWallet)

		if (currentWalletWithPrices instanceof Object) {
			await interaction.reply({ embeds: [
				createWalletEmbed(
					currentWalletWithPrices,
					interaction.user.displayAvatarURL({ format: 'jpg' }),
					interaction.user.username
				)
			]})
		} else {
			await interaction.reply({ content: `${interaction.user.username}, your wallet is empty` })
		}
	},
}