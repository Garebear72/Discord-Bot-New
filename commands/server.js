const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Display a ton of info about the current server!'),
	async execute(interaction) {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}\nDate created: ${interaction.guild.createdAt}\nServer Verification Level: ${interaction.guild.verificationLevel}`);
	},
};
