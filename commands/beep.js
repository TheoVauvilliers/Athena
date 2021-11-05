const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('beep')
		.setDescription('Replies with boop!')
		.addStringOption(option =>
			option.setName('arg')
				.setDescription('Your argument')
				.setRequired(false)),
	async execute(interaction) {
		console.log(interaction.options)
		await interaction.reply({ content: `Boop ${interaction.options.getString('arg')} !`, ephemeral: true })
	},
}