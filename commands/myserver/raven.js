const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('raven')
		.setDescription('For my dearest dumbass friend <3'),
	async execute(interaction) {
		const ravenEmbed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('My Dearest Raven...')
			.setDescription('- A Short Story -')
			.setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/3782_Common_Raven_in_flight.jpg/1920px-3782_Common_Raven_in_flight.jpg')
			.addFields(
				{ name: 'You a Buttmunch!', value: 'And you probably eat poopoo, too!' },
				{ name: 'But I Gotta Admit...', value: 'I think you\'re pretty cool!'},
				{ name: 'Wanna Be Friends?', value: 'I\'ll buy you something from the dollar tree LOL.'}
			)
			.setTimestamp()
			.setFooter('Made by BearBear');

		await interaction.reply({ embeds: [ravenEmbed] });
	},
};
