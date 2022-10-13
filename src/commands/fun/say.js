module.exports = {
    name: 'say',

    async execute(client, message, args) {
        message.delete();

        var salon = message.channel ;

        var texte = args.join(" ");

        salon.send(texte);
    },
};