const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('crypto')
		.setDescription('crypto!'),
	async execute(interaction) {
		await interaction.reply('crypto!')
	},
}