const { SlashCommandBuilder } = require('@discordjs/builders')
const { getAvailableCrypto } = require('../lib/api.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('crypto-list')
		.setDescription('Displays the list of available cryptocurrencies.')
		.addStringOption(option =>
			option.setName('number')
				.setDescription('Number of cryptocurrency to display, 20 by default, 200 max.')
				.setRequired(false)),
	async execute(interaction) {				
		await interaction.reply({ content: await getAvailableCrypto(interaction.options.getString('number'))})
	},
}