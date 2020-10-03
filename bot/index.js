const Discord = require("discord.js");
const config = require("./config/config.json");
const commandMap = require("./commands")

const client = new Discord.Client();

client.login(config.BOT_TOKEN);

const prefix = "!";

client.on("message", function(message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const body = message.content.slice(prefix.length);
    const args = body.split(' ');
    const command = args.shift().toLocaleLowerCase();

    args.push(message.author)

    if (!commandMap.has(command)) return message.reply("Command not found");

    const commandFunc = commandMap.get(command);

    const response = commandFunc.func(args);
    
    message.reply(response);

    const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#3A2956')
        .setTitle('Officebot says: ')
        .setDescription(message)
        .addFields(
            {value: response },
        )
        .setTimestamp()

    message.channel.send(exampleEmbed);
});