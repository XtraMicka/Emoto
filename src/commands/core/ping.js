const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'ping',
    aliases: ['latence', 'ms'],

    async execute(client, message) {
        var salon = message.channel ;

        var ping = new EmbedBuilder()
            .setTitle(`${emote.warning} Latence`)
            .addFields(
                {
                    name: `- Info about latence`,
                    value: `***${client.ws.ping}*** ms`,
                    inline: false,
                },{
                    name: `- Bot Latence`,
                    value: `***${Date.now() - message.createdTimestamp}*** ms`,
                    inline: false,
                },
            )
            .setColor(option.color);

        salon.send({ embeds: [ping] });
    },
};