module.exports = {
  name: 'mute',
  description: 'mute a user!',
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
        const role = message.guild.roles.cache.get('749986601177841696');
        targetMember.roles.add(role);
        message.reply(`${target} has been successfully muted`);
      } else {
        message.reply('Please specify someone to mute');
      }
    } else {
      message.reply('You do not have permission to use this command');
    }
  },
};