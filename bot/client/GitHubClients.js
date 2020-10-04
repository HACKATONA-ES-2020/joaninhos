//client para chamda da api do git
const authentication = require("../config/config.json")
const fetch = require("node-fetch");
const { Octokit } = require("@octokit/rest");

async function searchMe(token) {
    try {
        const octokit = new Octokit({
            auth: token
        });
        const response = await octokit.request('GET /user')
        const data = response.data;

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
    searchMe: searchMe,
    getRepositories: getRepositories,
    searchByName: searchByName,
    listRepoLanguages: listRepoLanguages,
}

module.exports = gitHubClient