//client para chamda da api do git
const fetch = require("node-fetch");

async function getRepositories(username){
    let repos = [];

    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const data = await response.json();

        data.forEach(repo => {
            repos.push({
                name: repo.name,
                description: repo.description,
                htmlUrl: repo.html_url
            });
        });

        return repos;
    } catch (e) {
        return "CAIU NO CATCH";
    }
}

const gitHubClient = {
    getRepositories: getRepositories,
}

module.exports = gitHubClient