module.exports = async (client) =>{
    console.log(`🔋✔ | ${client.guilds.cache.size} servers | ${client.users.cache.size} users |`);
    client.user.setActivity(`use "e!help" for commands`, { type: "WATCHING" });
}