const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'kick',

    async execute(client, message, args) {
        if (!message.member.permissions.has("KICK_MEMBERS")) return ;

        var salon = message.channel ;

        var Error1 = new EmbedBuilder()
            .setDescription(`${emote.error} ⠂Please mention a member !`)
            .setColor(option.color);

        var Error2 = new EmbedBuilder()
            .setDescription(`${emote.error} ⠂You can't kick me !`)
            .setColor(option.color);

        var Error3 = new EmbedBuilder()
            .setDescription(`${emote.error} ⠂You can't kick yourself !`)
            .setColor(option.color);

        var Error4 = new EmbedBuilder()
            .setDescription(`${emote.error} ⠂This user is higher than you !`)
            .setColor(option.color);

        const target = message.mentions.users.first();

        if (!target) return salon.send({ embeds: [Error1] });
        if (!args[0]) return salon.send({ embeds: [Error1] });
        if (target.id == '469003738753925160') return salon.send({ embeds: [Error2] });
        if (message.author.id === target.id) return salon.send({ embeds: [Error3] });
        if (message.member.roles.highest.comparePositionTo(message.guild.members.cache.get(target.id).roles.highest) <= 0 ) return salon.send({ embeds: [Error4] });

        message.guild.members.cache.get(target.id).kick();

        var Kick = new EmbedBuilder()
            .setDescription(`${emote.kick} ⠂Member kicked; **${target.username}#${target.discriminator} [${target.id}]** !`)
            .setColor(option.color);
    
        salon.send({ embeds: [Kick] });
    },
};