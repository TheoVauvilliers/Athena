import { Client, Intents } from 'discord.js'
import { token, prefix } from './config.js'

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
})

client.once('ready', () => {
    console.log('I\'m online dude !')
})

client.on('messageCreate', (message) => {
    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;
    
    if (message.content.includes('ping')) {
        message.channel.send('pong')
    }

    else if (message.content.includes('Hey')) {
        message.channel.send('What\'s up dude ?')
    }
})

client.login(token)