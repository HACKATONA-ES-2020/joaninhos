// comandos para o git
const gitClient = require("../client/GitHubClients.js");

const argFunc = new Map();

argFunc.set("repositories", findUserRepositories);
argFunc.set("search-user", searchUserByName);
argFunc.set("whoami", searchMe)

async function searchMe(token){
    const user = await gitClient.searchMe(token);

    return `${user.login} \n ${user.name} \n ${user.email} 
    \n ${user.avatarURL} \n ${user.company} \n ${user.location} 
    \n ${user.bio} \n\n`;
}

async function findUserRepositories(username) {
    const repos = await gitClient.getRepositories(username);
    let stringFinal = "";

    repos.forEach(repo => {
        stringFinal += `${repo.name} \n ${repo.description} \n ${repo.htmlUrl} \n`;
    });

    return stringFinal;
}

async function searchUserByName(username) {
    const user = await gitClient.searchByName(username);

    return `${user.login} \n ${user.name} \n ${user.email} 
      \n ${user.avatarURL} \n ${user.company} \n ${user.location} 
      \n ${user.bio} \n\n`;
}

module.exports = {
    func: async function (args) {
        const func = args.shift();
        const arg = args.shift();
        return argFunc.get(func)(arg);
    },
};
