const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'ban',

    async execute(client, message, args) {
        if (!message.member.permissions.has("BAN_MEMBERS")) return ;

        var salon = message.channel ;

        var Error1 = new EmbedBuilder()
            .setDescription(`${emote.error} ⠂Please mention a server member !`)
            .setColor(option.color);

        var Error2 = new EmbedBuilder()
            .setDescription(`${emote.error} ⠂You can't ban me !`)
            .setColor(option.color);

        var Error3 = new EmbedBuilder()
            .setDescription(`${emote.error} ⠂You can't ban yourself !`)
            .setColor(option.color);

        var Error4 = new EmbedBuilder()
            .setDescription(`${emote.error} ⠂This user is higher than you !`)
            .setColor(option.color);

        const target = message.mentions.users.first();

        if (!target) return salon.send({ embeds: [Error1] });
        if (!args[0]) return salon.send({ embeds: [Error1] });
        if (target.id == '469003738753925160') return salon.send({ embeds: [Error2] });
        if (message.author.id === target.id) return salon.send({ embeds: [Error3] });
        if (message.member.roles.highest.comparePositionTo(message.guild.members.cache.get(target.id).roles.highest)) return salon.send({ embeds: [Error4] });

        message.guild.members.cache.get(target.id).ban();
    
        var Ban = new EmbedBuilder()
            .setDescription(`${emote.ban} ⠂Member banned: **${target.username}#${target.discriminator} [${target.id}]** !`)
            .setColor(option.color);

        salon.send({ embeds: [Ban] });
    },
};