module.exports = {
    name: '2',

    async execute(client, message, args) {
        message.delete();

        if (message.author.id !== client.config.id.dev || !args[0]) return ;
        
        client.guilds.cache.get(args[0]).leave();

        message.channel.send(`J'ai quitté le serveur mentionné !`);
    },
};