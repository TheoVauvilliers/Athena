const { SlashCommandBuilder } = require('@discordjs/builders')
const { PROJECT_DIR } = require('settings')
const { fetch, fetchOneById } = require(PROJECT_DIR + '/lib/userRepository.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('wallet')
		.setDescription('WIP'),
	async execute(interaction) {
		console.log(fetchOneById(interaction.user.id))
		await interaction.reply({ content: 'WIP' })
	},
}