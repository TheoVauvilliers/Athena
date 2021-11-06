const fs = require('fs')
const { SlashCommandBuilder } = require('@discordjs/builders')
const { REST } = require('@discordjs/rest')
const { Routes } = require('discord-api-types/v9')
const { clientId, guildId, token } = require('./config.js')
const { loadCommands } = require('./lib/helpers.js')

// To get the names of commands in the commands directory using file names
const commands = []
const commandPath = loadCommands(fs)
for (const path of commandPath) {
	const command = require(path)
	commands.push(command.data.toJSON())
}

const rest = new REST({ version: '9' }).setToken(token)

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error)