const { SlashCommandBuilder } = require('@discordjs/builders')
const { getAvailableCrypto } = require('../lib/api.helpers')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('crypto')
		.setDescription('crypto!'),
	async execute(interaction) {		
		await interaction.reply({ content: await getAvailableCrypto(), ephemeral: false })
	},
}