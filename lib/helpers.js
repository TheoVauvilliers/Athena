const fs = require('fs')
const path = require('path');

exports.loadCommands = () => {
    const pluginsDir = './plugins/'

    if (fs.existsSync(pluginsDir)) {
        // Get the name of all plugins
        const foldersName = fs.readdirSync(pluginsDir)
        let commands = []

        foldersName.forEach(folder => {
            const dir = path.resolve(pluginsDir, folder, 'commands')

            if (fs.existsSync(dir)) {
                let filesName = fs.readdirSync(dir).filter(file => file.endsWith('.js'))

                filesName.forEach(command => {
                    commands.push(path.join(dir, command))
                });
            }
        })

        return commands
    }
}