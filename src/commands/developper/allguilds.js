const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: '1',

    async execute(client, message, args) {
        message.delete();

        if (message.author.id !== client.config.id.dev) return ;

        var salon = message.channel ;

        var Guilds = client.guilds.cache.map(guild => guild.id).join(`\n`);
        var Name   = client.guilds.cache.map(guild => guild.name).join(`\n`);

        var tableau = new EmbedBuilder()
            .setColor(option.color)
            .setTitle('Voici la liste de tout les serveurs et leurs ID')
            .addFields(
                {
                    name:  '**Nom du serveur:**',
                    value: `\`${Name}\`\n`,
                    inline: true,
                },{
                    name: '**ID du serveur:**',
                    value: `\`${Guilds}\`\n`,
                    inline: true,
                },
            );
        
        salon.send({ embeds: [tableau] });
    },
};