const { SlashCommandBuilder } = require('@discordjs/builders')
const { createWalletEmbed } = require('../lib/embeds.js')
const { getPricesCrypto } = require('../lib/api.js')
const { getWallet } = require('../lib/db.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('wallet')
		.setDescription('WIP'),
	async execute(interaction) {
		let currentWallet = getWallet(interaction.user.id)
		let currentPrices = await getPricesCrypto(currentWallet)

		await interaction.reply({ embeds: [
			createWalletEmbed(
				currentWallet,
				currentPrices,
				interaction.user.displayAvatarURL({ format: 'jpg' }),
				interaction.user.username
			)
		]})
	},
}