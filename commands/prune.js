module.exports = {
  name: 'prune',
  description: 'Prune comments',
  args: true,
  guildOnly: true,
  execute(message, args) {
    const amount = parseInt(args[0]) + 1;

    if (isNaN(amount)) {
      return message.reply('Please specified a number');
    } else if (amount <= 1 || amount > 100) {
      return message.reply('You need to put in a number between 1 and 99');
    }

    message.channel.bulkDelete(amount, true).catch(err => {
      console.log(err);
      message.channel.send('There was an error trying to delete your messages');
    })
  },
};