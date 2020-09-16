module.exports = {
  name: 'kick',
  description: 'kick a user!',
  args: false,
  guildOnly: true,
  execute(message, args) {
    if (
      message.member.hasPermission('ADMINISTRATOR') ||
      message.member.hasPermission('KICK_MEMBERS')
    ) {
      const target = message.mentions.members.first();
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id);
        targetMember.kick();
        message.reply(`${target} has been successfully kicked`)
      } else {
        message.reply('Please specify someone to kick')
      }
    } else {
      message.reply('You do not have permission to use this command')
    }
  },
};