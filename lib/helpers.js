const fs = require('fs')
// TODO: Use the path module instead of the flat path for compatibility
// https://nodejs.org/api/path.html

exports.loadCommands = () => {
    const pluginsDir = './plugins/'

    // Check if the plugins folder exists
    if (fs.existsSync(pluginsDir)) {
        // Get the name of all plugins
        const foldersName = fs.readdirSync(pluginsDir)
        let commands = []

        foldersName.forEach(folder => {
            const dir = pluginsDir + folder + '/commands/'

            // If commands folder exists
            if (fs.existsSync(dir)) {
                let filesName = fs.readdirSync(dir).filter(file => file.endsWith('.js'))

                filesName.forEach(command => {
                    commands.push(dir + command)
                });
            }
        })

        return commands
    }
}