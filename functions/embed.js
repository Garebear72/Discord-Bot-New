function simpleEmbed(title, description, fieldName, fieldValue, color, iconURL, footerText) {
	const { MessageEmbed } = require('discord.js');


	const embed = new MessageEmbed()
		.setColor(color)
		.setTitle(title)
		.setDescription(description)
		.setThumbnail(iconURL)
		.addField(fieldName, fieldValue)
		.setTimestamp()
		.setFooter(footerText, iconURL);
	console.log(embed);
	return embed;
}


module.exports = { simpleEmbed };

//channel.send({ embeds: [exampleEmbed] });
