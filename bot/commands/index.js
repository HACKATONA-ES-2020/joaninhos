const gitHubCommand = require("./GitHubCommands.js");
const hoursCommand = require("./JobCommands.js")

const commandMap = new Map();

commandMap.set("git", gitHubCommand);
commandMap.set("job", hoursCommand);

module.exports = commandMap;