const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js')

module.exports = class kickcommand extends Command {
    constructor(client) {
      super(client, {
        name:"kick",
        group: 'moderation',
        memberName: 'kick',
        userPermissions: ['KICK_MEMBERS'],
        description: 'Kicks a user.',
        args: [
          {
            type:"user",
            prompt:"Which user would you like to kick?",
            key:"user",
          }
        ]
      })
    }
    run(msg, { user }) {

      if (msg.guild.member(user).hasPermission('ADMINISTRATOR')) return msg.reply('This user is an administrator and cannot be kicked.')
      if (!msg.guild.me.hasPermission('KICK_MEMBERS')) return msg.reply('I currently have two low of permissions to kick anybody.')

      msg.guild.member(user).kick()
      msg.say('Successfully kicked ' + user)
    }
}
// honestly this needs fixing such as adding private DM's informing of kick but this is the rough idea for kicking members
