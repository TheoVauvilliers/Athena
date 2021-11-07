const { SlashCommandBuilder } = require('@discordjs/builders')
const { getAvailableCrypto } = require('../lib/api.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('crypto-list')
		.setDescription('Displays the list of available crypto-currencies sorted by rank.')
		.addStringOption(option =>
			option.setName('top')
				.setDescription('Top x cryptocurrency to display, top 20 by default, top 200 max.')
				.setRequired(false)),
	async execute(interaction) {				
		await interaction.reply({ content: await getAvailableCrypto(interaction.options.getString('top'))})
	},
}