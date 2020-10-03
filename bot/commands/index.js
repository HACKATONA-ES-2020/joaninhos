const gitHubCommand = require("./GitHubCommands.js");

const commandMap = new Map();

commandMap.set("git", gitHubCommand);

module.exports = commandMap;