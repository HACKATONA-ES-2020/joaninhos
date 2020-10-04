const gitHubCommand = require("./GitHubCommands.js");
const hoursCommand = require("./JobCommands.js")
const miroCommand = require("./MiroCommands.js")
const calendarCommand = require("./CalendarCommands.js");
const coffeeCommand = require("./CoffeeCommands.js")

const commandMap = new Map();

commandMap.set("git", gitHubCommand);
commandMap.set("job", hoursCommand);
commandMap.set("miro", miroCommand);
commandMap.set("calendar", calendarCommand);
commandMap.set("coffee", coffeeCommand)

module.exports = commandMap;