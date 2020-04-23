const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js')

module.exports = class addRoleCommand extends Command {
    constructor(client) {
      super(client, {
        name:"addrole",
        aliases: ["add-role", "arole"],
        group: 'moderation',
        memberName: 'addrole',
        description: "Adds a role to a user.",
        userPermissions: ['MANAGE_MESSAGES'],
        args: [
            {
              type:"user",
              prompt:"```Which user would you like to add?```",
              key:"user",
            },
            {
              type:"role",
              prompt:"```Which role would you like to add?```",
              key:"role"
            }
        ]
      })
    }
    run(msg, { user, role}) {

      msg.guild.member(user).addRole(role)
      msg.say('Succesfully added ' + user + ' to specified role')


    }
}
