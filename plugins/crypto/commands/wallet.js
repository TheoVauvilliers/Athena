const { SlashCommandBuilder } = require('@discordjs/builders')
const { getWallet } = require('../lib/db.js')
const { createWalletEmbed } = require('../lib/embeds.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('wallet')
		.setDescription('WIP'),
	async execute(interaction) {
		await interaction.reply({ embeds: [
			createWalletEmbed(
				getWallet(interaction.user.id),
				interaction.user.displayAvatarURL({ format: 'jpg' }),
				interaction.user.username
			)
		]})
	},
}