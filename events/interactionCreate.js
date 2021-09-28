module.exports = {
	name: 'interactionCreate',
	async execute(interaction) {
		console.log(`User: ${interaction.user.tag} | Server: ${interaction.guild.name} | Channel: #${interaction.channel.name} --> triggered the following interaction: ${interaction.commandName}`);

		if (!interaction.isCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) return;

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(error);
			return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	},
};
