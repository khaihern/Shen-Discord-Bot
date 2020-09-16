module.exports = {
  name: 'ban',
  description: 'ban a user!',
  args: false,
  guildOnly: true,
  execute(message, args) {
    if (
      message.member.hasPermission('ADMINISTRATOR') ||
      message.member.hasPermission('BAN_MEMBERS')
    ) {
      const target = message.mentions.members.first();
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id);
        targetMember.ban();
        message.reply(`${target} has been successfully banned`)
      } else {
        message.reply('Please specify someone to ban')
      }
    } else {
      message.reply('You do not have permission to use this command')
    }
  },
};