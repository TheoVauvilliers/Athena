const fs = require('fs')
const { SlashCommandBuilder } = require('@discordjs/builders')
const { REST } = require('@discordjs/rest')
const { Routes } = require('discord-api-types/v9')
const { guildId } = require('./config.js')
const { loadCommands } = require('./lib/helpers.js')
require('dotenv').config()

// To get the names of commands in the commands directory using file names
const commands = []
const commandPath = loadCommands(fs)
for (const path of commandPath) {
	const command = require(path)
	commands.push(command.data.toJSON())
}

const rest = new REST({ version: '9' }).setToken(process.env.ATHENA_TOKEN)

guildId.forEach(id => {
    rest.put(Routes.applicationGuildCommands(process.env.ATHENA_CLIENT_ID, id), { body: commands })
    .then(() => console.log(`Successfully registered application commands on ${id}.`))
    .catch(console.error)
})