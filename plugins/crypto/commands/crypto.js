const { SlashCommandBuilder } = require('@discordjs/builders')
const { getInformationCrypto } = require('../lib/api.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('crypto')
		.setDescription('Use this command to get information about a specific cryptocurrency.')
		.addStringOption(option =>
			option.setName('id')
				.setDescription('Insert id of crypto, you can find it with /crypto-list command')
				.setRequired(true)),
	async execute(interaction) {				
		await interaction.reply({ content: async () => {
			return await getInformationCrypto(interaction.options.getString('id'))
		} })
	},
}
