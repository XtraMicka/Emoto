const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: '3',

    async execute(client, message, args) {
        message.delete();

        if (message.author.id !== client.config.id.dev) return ;
        
        console.log();
    }
};