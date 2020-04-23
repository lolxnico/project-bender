const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js')

module.exports = class helpCommand extends Command {
    constructor(client) {
      super(client, {
        name:"help",
        aliases: ["help me", "halp"],
        group: 'misc',
        memberName: 'help',
        description: 'Lists all commands.',
        examples: ['help']
        //userPermissions: ['MANAGE_MESSAGES']
      });
    }

    run(msg) {
      return msg.say('Currently, there are a few commands. ```!Help - lists commands, !kick - Kicks mentioned user, !addrole - Changes user role with permissions, !avatar - sends you specified users profile picture,```');
    }
};
