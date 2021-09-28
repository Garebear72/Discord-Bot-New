const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageActionRow, MessageButton } = require('discord.js')
const pingping = require('../../functions/pingping')
const embed = require('../../functions/embed')
const { MessageEmbed } = require('discord.js')
let pingTest;

// const ping = require('ping');
// const hosts = []
module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Ping a certain website'),
	async execute (interaction) {
		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('Google')
					.setLabel('Google')
					.setStyle('SECONDARY'),
				new MessageButton()
					.setCustomId('Reddit')
					.setLabel('Reddit')
					.setStyle('DANGER'),
				new MessageButton()
					.setCustomId('Facebook')
					.setLabel('Facebook')
					.setStyle('PRIMARY'),
				new MessageButton()
					.setCustomId('Discord')
					.setLabel('Discord')
					.setStyle('SUCCESS')
			)

		await interaction.reply({ content: 'Where do you want to ping me to?', components: [row] })

		// Create a collector (it collects input) that lasts for 10 seconds
		const collector = interaction.channel.createMessageComponentCollector({ componentType: 'BUTTON', time: 10000 })

		// Whenever the collector 'collects', and if it matches the filter ID, run the following code after the await statement :)
		collector.on('collect', async i => {
			if (i.user.id === interaction.user.id) {
				if (i.customId === 'Google') {
					await i.deferUpdate()
					pingTest = pingping.pingFunction('google.com')
					pingTest.then(async function (result) {
						await i.fetchReply()
							.then(reply => reply.edit({ components: [], embeds: [embed.simpleEmbed(
									`${i.customId} Ping Test`,
									`Single Packet Test`,
									`Results:`,
									`${result} ms`,
									'#6c0000',
									`https://b.catgirlsare.sexy/qV_ckQbjOaax.png`,
									`Test Ran`
								)] }))
							.then(() => collector.stop())
							.catch(console.error)
					})
				} else if (i.customId === 'Reddit') {
					await i.deferUpdate()
					pingTest = pingping.pingFunction('reddit.com')
					pingTest.then(async function (result) {
						await i.fetchReply()
							.then(reply => reply.edit({ components: [], embeds: [embed.simpleEmbed(
									`${i.customId} Ping Test`,
									`Single Packet Test`,
									`Results:`,
									`${result} ms`,
									'#6c0000',
									`https://b.catgirlsare.sexy/qV_ckQbjOaax.png`,
									`Test Ran`
								)] }))
							.then(() => collector.stop())
							.catch(console.error)
					})
				} else if (i.customId === 'Facebook') {
					await i.deferUpdate()
					pingTest = pingping.pingFunction('facebook.com')
					pingTest.then(async function (result) {
						await i.fetchReply()
							.then(reply => reply.edit({ components: [], embeds: [embed.simpleEmbed(
									`${i.customId} Ping Test`,
									`Single Packet Test`,
									`Results:`,
									`${result} ms`,
									'#6c0000',
									`https://b.catgirlsare.sexy/qV_ckQbjOaax.png`,
									`Test Ran`
								)] }))
							.then(() => collector.stop())
							.catch(console.error)
					})
				} else if (i.customId === 'Discord') {
					await i.deferUpdate()
					pingTest = pingping.pingFunction('discord.com')
					pingTest.then(async function (result) {
						await i.fetchReply()
							.then(reply => reply.edit({ components: [], embeds: [embed.simpleEmbed(
									`${i.customId} Ping Test`,
									`Single Packet Test`,
									`Results:`,
									`${result} ms`,
									'#6c0000',
									`https://b.catgirlsare.sexy/qV_ckQbjOaax.png`,
									`Test Ran`
								)] }))
							.then(() => collector.stop())
							.catch(console.error)
					})
				}
			} else {
				await i.reply({ content: `These buttons aren't for you!`, ephemeral: true })
			}
		})

		collector.on('end', collected => {
			console.log(`Collected ${collected.size} interactions.`)
			if (collected.size === 0) {
				interaction.followUp({
					content: 'You took too long to select a location to ping to! Please try again',
					ephemeral: true
				})
				interaction.deleteReply()
			}
		})
	},
}
