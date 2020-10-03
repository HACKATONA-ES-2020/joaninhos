// comandos para o git
const gitClient = require("../client/GitHubClients.js");

async function findUserRepositories(username) {
    const repos = await gitClient.getRepositories(username);
    let stringFinal = "";

    repos.forEach(repo =>{
        stringFinal += `${repo.name} \n ${repo.description} \n ${repo.htmlUrl} \n`;
    });

    return stringFinal;
}

module.exports = {
    func: async function (args) {
        if (args[0] === 'repos') {
            const response = await findUserRepositories(args[1]);
            return response;
        }
        else {
            return "`Args` is not a valid command";
        }

    },
};
