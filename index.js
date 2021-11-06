const fs = require('fs')
const { Client, Collection, Intents } = require('discord.js')
const { token } = require('./config.js')
const { loadCommands } = require('./lib/helpers.js')

const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

// To get the names of commands in the commands directory using file names
client.commands = new Collection()
const commandPath = loadCommands(fs)
for (const path of commandPath) {
	const command = require(path)
	client.commands.set(command.data.name, command)
}

client.once('ready', () => {
	console.log('Thor is ready to break the world !')
})

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return

	const command = client.commands.get(interaction.commandName)

	if (!command) return

	try {
		await command.execute(interaction)
	} catch (error) {
		console.error(error)
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true })
	}
})

client.login(token)