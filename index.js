const { Client, GatewayIntentBits, Collection } = require("discord.js");
const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildEmojisAndStickers
    ]
});

const fs = require('fs');
const events = fs.readdirSync('./src/events').filter(file => file.endsWith('.js'));

client.commands = new Collection();

fs.readdirSync('./src/commands').forEach(dirs => {
    const commands = fs.readdirSync(`./src/commands/${dirs}`).filter(files => files.endsWith('.js'));

    for (const file of commands) {
        const command = require(`./src/commands/${dirs}/${file}`);

        console.log(`🎯 La commande ${file} a été chargée.`);

        client.commands.set(command.name.toLowerCase(), command);
    };
});

for (const file of events) {
    console.log(`📢 Le fichier ${file} a été chargé.`);
    const event = require(`./src/events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};

client.config = require('./src/config/bot');
config = client.config ;
option = config.option ;
salon = config.salon ;
id = config.id ;
emote = config.emote ;

/** Mise en ligne du bot */
client.login(process.env.ID);