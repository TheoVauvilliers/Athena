exports.loadCommands = (fs) => {
    const pluginsDir = './plugins/'
    const commandsDir = '/commands/'

    // Check if the plugins folder exists
    if (fs.existsSync(pluginsDir)) {
        // Get the name of all plugins
        const foldersName = fs.readdirSync(pluginsDir)
        let commands = []

        foldersName.forEach(folder => {
            const dir = pluginsDir + folder + commandsDir

            // If commands folder exists
            if (fs.existsSync(pluginsDir + folder + commandsDir)) {
                let dirCommands = fs.readdirSync(dir).filter(file => file.endsWith('.js'))

                dirCommands.forEach(command => {
                    commands.push(dir + command)
                });
            }
        })

        return commands
    }
}