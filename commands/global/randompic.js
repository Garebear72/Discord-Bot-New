const { SlashCommandBuilder } = require('@discordjs/builders');
const imgur = require('../../functions/imgur');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('randompic')
		.setDescription('Show a random picture from the internet.')
		.addStringOption(option =>
			option.setName('searchterm')
				.setDescription('Insert Search Term')
				.setRequired(true)),
	async execute(interaction) {
		await interaction.deferReply()
			.then(a => console.log(a))
			.catch(console.error);
		let term = interaction.options.getString('searchterm');
		term = term.toString();
		term = term.toLowerCase();
		let image = await imgur.randomImage(term);
		// await interaction.fetchReply()
		// 	.then(reply => reply.editReply({ content: image[0], components: [] }))
		await interaction.editReply(image[0]);
		//await interaction.followUp(`This image was found on page ${image[1]} of the internet.`)
	},
};
