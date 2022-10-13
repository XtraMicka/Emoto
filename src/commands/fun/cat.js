const { EmbedBuilder } = require('discord.js');
const superagent = require('superagent');

module.exports = {
    name: 'cat',

    async execute(client, message, args) {
        var salon = message.channel ;

        var { body } = await superagent.get(`http://aws.random.cat/meow`);
      
        var Cat = new EmbedBuilder()
            .setColor(option.color)
            .setAuthor({ name: 'Meoww', iconURL: null, url: null })
            .setTitle("link")
            .setURL(body.file)
            .setImage(body.file);

        salon.send({ embeds: [Cat] });
    },
};