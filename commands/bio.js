module.exports = {
  name: 'bio',
  description: 'Bio Events',
  args: false,
  guildOnly: true,
  execute(message, args) {
    if (
      message.member.hasPermission('ADMINISTRATOR')
    ) {
      console.log(args);
      const time = args[0];
      const countdown = args[1];
      
      const bioEmbed = {
	      color: '#61ce70',
	      title: `Bio Jam Session ${time} | Start in ${countdown}`,
        author: {
		      name: 'Edward Li',
		      icon_url: 'https://cdn.discordapp.com/avatars/457356649905258497/9a4be2aa5e8deda1b413b15a5a33778e.png?size=128',
	      },
        description: 'Join us here live at 8:30PM to review with us for the upcoming Ecology test. We will be doing: Quizlet Live Review Study Guide, and go over any Frequently Missed Question.',
	      image: {
		      url: 'https://media.discordapp.net/attachments/739865160063254559/765892691434405888/unknown.png?width=895&height=401',
	      },
	      timestamp: new Date(),
	      footer: {
	    	  text: `A Shen Original`,
          icon_url: 'https://media.discordapp.net/attachments/716483368795111436/766412822703112253/shen_logo.png',
	      },
      };

      message.channel.send('<@&759935241187491881>');
      message.channel.send({ embed: bioEmbed });
    } else {
      message.reply('You do not have permission to use this command');
    }
  },
};