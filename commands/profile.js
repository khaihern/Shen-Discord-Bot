module.exports = {
  name: 'profile',
  description: 'Profile embed',
  args: false,
  guildOnly: true,
  execute(message, args) {

    const selectedUser = (message.mentions.users.first() || message.member.user);
    const selectedMember = (message.mentions.members.first() || message.member);
    
    const profileEmbed = {
	    color: '#1E8429',
	    title: selectedUser.tag,
	    author: {
	    	name: selectedUser.username,
	    	icon_url: selectedUser.displayAvatarURL({ format: "png", dynamic: "true"}),
	    },
	    thumbnail: {
	    	url: selectedUser.displayAvatarURL({ format: "png", dynamic: "true"}),
	    },
	    fields: [
	    	{
	    		name: 'Joined',
	    		value: selectedMember.joinedAt,
	    	},
        {
	    		name: 'Registered',
	    		value: selectedUser.createdAt,
	    	},
	    ],
	    timestamp: new Date(),
	    footer: {
	    	text: `ID: ${selectedUser.id}`,
	    },
    };

    message.channel.send({ embed: profileEmbed });
  },
};