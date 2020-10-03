const Discord = require("discord.js"); // check is I cannot import it like ES6
const config = require("./config/config.json");


// login - make login in another file
const client = new Discord.Client();

client.login(config.BOT_TOKEN);

// commands - create file for commands

const prefix = "!";

client.on("message", function(message) {
    if (message.author.bot) return; // if the message comes from another bot, stop processing  
    if (!message.content.startsWith(prefix)) return; // if the message doesn't start with command prefix, stop processing

    const body = message.content.slice(prefix.length); // removes the prefix
    const args = body.split(' '); // creates an array with command and args, if has it
    const command = args.shift().toLocaleLowerCase(); // get and remove the first index on args array, and the first is always the command

    if (command === "ping") {
        message.reply("Pong!");
    }
});