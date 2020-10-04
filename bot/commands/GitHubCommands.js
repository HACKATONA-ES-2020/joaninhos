// comandos para o git
const gitClient = require("../client/GitHubClients.js");

async function createNewRepository() {
    //const repo = await gitClient.createNewRepository();


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
    let stringFinal = "";

    stringFinal = `${user.login} \n ${user.name} \n ${user.email} 
      \n ${user.avatarURL} \n ${user.company} \n ${user.location} 
      \n ${user.bio} \n\n`;

    return stringFinal;
}

module.exports = {
    func: async function (args) {
        const command = args.shift();
        const user = args.shift();
        let response = "";

        switch (command) {
            case 'repositories':
                response = await findUserRepositories(user);
                return response;

            case 'new-repository':
                response = await createNewRepository(args);
                return response;

            //!git search-user MarinaFX
            case 'search-user':
                response = await searchUserByName(user);
                return response;

            default:
                return `${command} is not a valid command`;
        }
    },
};
