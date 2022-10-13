const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h'],

    async execute(client, message, args) {
        var salon = message.channel ;

        if (args[0] == undefined) {
            var Help = new EmbedBuilder()
                .setTitle("Bot commands")
                .setDescription("Here are the commands that are implanted in me! More features are to be expected in the future!\n\nUse `-help [category]` for more infos !\n")
                .addFields(
                    {
                        name: '**:gear: Core**',
                        value: '` help ` ` ping `',
                        inline: true,
                    },{
                        name: '**:bowling: Fun**',
                        value: '` say ` ` cat ` ` dog `',
                        inline: true,
                    },{
                        name: '**:toolbox: Utilities**',
                        value: '` avatar ` ` poll `',
                        inline: true,
                    },{
                        name: '**:shinto_shrine: Anime**',
                        value: '` neko `',
                        inline: true,
                    },{
                        name: '**:ticket: Social**',
                        value: '` pat ` ` hug ` ` wink ` ` slap `',
                        inline: true,
                    },{
                        name: '**:shield: Moderation**',
                        value: '` purge ` ` ban ` ` kick `',
                        inline: true,
                    },{
                        name: '**:notes: Musique (WIP)**',
                        value: '` 🚧 play ` ` 🚧 pause ` ` 🚧 skip ` ` 🚧 stop ` ` 🚧 join ` ` 🚧 leave `',
                        inline: true,
                    },{
                        name: '**:coin: Leveling (WIP)**',
                        value: '` 🚧 rank ` ` 🚧 profile ` ` 🚧 daily ` ` 🚧 wallet ` ` 🚧 rep `',
                        inline: true,
                    },{
                        name: '\u200B',
                        value: '\u200B',
                        inline: true,
                    },
                )
                .setColor(option.color);
                /** .addField(`\u200B`,`\u200B`, true) */

            salon.send({ embeds: [Help] });
        };
        if (args[0] == "core" || args[0] == "Core") {
            var Core = new EmbedBuilder()
                .setTitle("Category: Core")
                .setDescription("Here are the commands for: Core")
                .addFields(
                    {
                        name: 'Help',
                        value: `Displays the help menu.`,
                        inline: false,
                    },{
                        name: 'Ping',
                        value: 'Displays the bot latency.',
                        inline: false,
                    },
                )
                .setColor(option.color);

            salon.send({ embeds: [Core] });
        };
        if (args[0] == "Utilities" || args[0] == "utilities") {
            var Utilities = new EmbedBuilder()
                .setTitle("Category: Utilities")
                .setDescription("Here are the commands for: Utilities")
                .addFields(
                    {
                        name: 'Avatar',
                        value: `Displays a member's profile picture.`,
                        inline: false,
                    },{
                        name: 'Poll',
                        value: 'Create a survey with this feature.',
                        inline: false,
                    },
                )
                .setColor(option.color);

            salon.send({ embeds: [Utilities] });
        };
        if (args[0] == "Moderation" || args[0] == "moderation") {
            var Moderation = new EmbedBuilder()
                .setTitle("Category: Moderation")
                .setDescription("Here are the commands for: Moderation")
                .addFields(
                    {
                        name: 'Purge',
                        value: 'Delete some messages.',
                        inline: false,
                    },{
                        name: 'Ban',
                        value: 'Ban the bad guys.',
                        inline: false,
                    },{
                        name: 'Kick',
                        value: 'Kick out the bad guys.',
                        inline: false,
                    },
                )
                .setColor(option.color);

            salon.send({ embeds: [Moderation] });
        };
        if (args[0] == "Fun" || args[0] == "fun") {
            var Fun = new EmbedBuilder()
                .setTitle("Category: Fun")
                .setDescription("Here are the commands for: Fun")
                .addFields(
                    {
                        name: 'Say',
                        value: 'Make me say what you want.',
                        inline: false,
                    },{
                        name: 'Cat',
                        value: 'Display a random cat image.',
                        inline: false,
                    },{
                        name: 'Dog',
                        value: 'Display a random dog image.',
                        inline: false,
                    },
                )
                .setColor(option.color);
                
            salon.send({ embeds: [Fun] });
        };
        if (args[0] == "Anime" || args[0] ==  "anime") {
            var Anime = new EmbedBuilder()
                .setTitle("Category: Anime")
                .setDescription("Here are the commands for: Anime")
                .addFields(
                    {
                        name: 'Neko',
                        value: 'Display a random neko image.',
                        inline: false,
                    },
                )
                .setColor(option.color)
                
            salon.send({ embeds: [Anime] });
        };
        if (args[0] == "Social" || args[0] ==  "social") {
            var Social = new EmbedBuilder()
                .setTitle("Category: Social")
                .setDescription("Here are the commands for: Social")
                .addFields(
                    {
                        name: 'Pat',
                        value: `Pat a member.`,
                        inline: false,
                    },{
                        name: 'Hug',
                        value: 'Hug a member.',
                        inline: false,
                    },{
                        name: 'Wink',
                        value: `Wink to a member`,
                        inline: false,
                    },{
                        name: 'Slap',
                        value: 'Slap a member.',
                        inline: false,
                    },
                )
                .setColor(option.color);
                
            salon.send({ embeds: [Social] });
        };
    },
};