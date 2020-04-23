const { Client } = require('discord.js-commando')
const path = require('path')

const client = new Client({
  commandPrefix: '!',
  owner: '483037891069476890', //This is my userID to confirm the bot's identiy belongs to me
  invite: 'https://discord.gg/5NZQd5R', //This is my discord server meant for testing the bot
})

client.registry
.registerDefaultTypes()
.registerGroups([
    ['misc', 'Misc'],
    ['moderation', 'Moderation']
])
.registerDefaultGroups()
.registerCommandsIn(path.join(__dirname, 'commands'))

client.once('ready', () => {
      console.log(`Logged in as ${client.user.tag}(${client.user.id})`)
      client.user.setActivity('Guarding and Assisting')
})

client.on('error', console.error)

client.login('REMOVED-FOR-OBVIOUS-REASONING')

// IF YOU NEED HELP UNDERSTANDING ANY OF THIS FEEL FREE TO REACH ME ON DISCORD @lolxnico#8062
