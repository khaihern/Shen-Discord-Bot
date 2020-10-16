const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

//==========================================

const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  console.log(command.name);
  client.commands.set(command.name, command);
}

client.on('ready', () => {
  console.log('Connected as ' + client.user.tag);

  client.user.setActivity('#GL@School', {type: 'WATCHING'});
});

client.on('message', message => {

  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  if (!client.commands.has(commandName)) return;

  const command = client.commands.get(commandName);

  if (command.guildOnly && message.channel.type === 'dm') {
    return message.reply('I cannot execute that command inside DMs!')
  }

  if (command.args && !args.length) {
    return message.channel.send(`You didn't provide any arguments, ${message.author}`);
  }

  try {
    command.execute(message, args);
  } catch (error) {
    console.log(error);
    message.reply('There was an error trying to execute your command!');
  }
});

client.login(token);