const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, token } = require('./config.json');

const guildId = '834446331087028254';

const commands = [];
const commandFiles = fs.readdirSync('./commands/myserver').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/myserver/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);
