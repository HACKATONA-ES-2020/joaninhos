const gitHubCommand = require("./GitHubCommands.js");
const hoursCommand = require("./JobCommands.js")
const miroCommand = require("./MiroCommands.js")

const commandMap = new Map();

commandMap.set("git", gitHubCommand);
commandMap.set("job", hoursCommand);
commandMap.set("miro", miroCommand);

module.exports = commandMap;