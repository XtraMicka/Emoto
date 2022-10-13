const { EmbedBuilder } = require('discord.js');
const superagent = require('superagent');

module.exports = {
    name: 'dog',

    async execute(client, message, args) {
        var salon = message.channel ;

        var { body } = await superagent.get(`https://dog.ceo/api/breeds/image/random`);
      
        var Dog = new EmbedBuilder()
            .setColor(option.color)
            .setAuthor({ name: 'Woof', iconURL: null, url: null })
            .setTitle("link")
            .setURL(body.message)
            .setImage(body.message);

        salon.send({ embeds: [Dog] });
    },
};