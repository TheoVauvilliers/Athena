const { SlashCommandBuilder } = require('@discordjs/builders')
const { fetch, fetchOneById, fetchWalletById } = require('../../../lib/userRepository.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('wallet')
		.setDescription('WIP'),
	async execute(interaction) {
		console.log(fetchWalletById(interaction.user.id))
		await interaction.reply({ content: 'WIP' })
	},
}