//client para chamda da api do git
const fetch = require("node-fetch");

async function createNewRepository() {
    try{
        const response = await fetch(method, `https://api.github.com/users/${username}/repos`);

    } catch (e){
        return e;
    } 
}

async function searchByName(username) {

    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();

        return {
            login: data.login,
            name: data.name,
            email: data.email,
            avatarURL: data.avatar_url,
            profileURL: data.html_url,
            company: data.company,
            location: data.location,
            bio: data.bio
        };
    } catch (e) {
        return e
    }
}

async function getRepositories(username) {
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
        return e;
    }
}

const gitHubClient = {
    getRepositories: getRepositories,
    searchByName: searchByName,
    createNewRepository: createNewRepository,
}

module.exports = gitHubClient