const authentication = require("../config/config.json")
const fetch = require("node-fetch")

async function getBoard(id){
        const response = await fetch(`https://api.miro.com/v1/boards/${id}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + authentication.MIRO_TOKEN
            }
        })
        .catch (e => (e))

        const data = await response.json() 
        
        return {
            name: data.name,
            description: data.description,
            viewLink: data.viewLink
        }
}

async function createBoardWithoutTitle(){
        const policy = {
            access: "comment",
            teamAccess: "edit"
        }

        const request = {
            sharingPolicy: policy
        }
        const response = await fetch(`https://api.miro.com/v1/boards`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + authentication.MIRO_TOKEN
            },
            body: JSON.stringify(request),
            json: true
        })
        .catch (e => (e))

        const data = await response.json() 

        return {
            viewLink: data.viewLink
        }
}

async function createBoard(title){
        const request = {
            name: title,
            sharingPolicy: {
                access: "comment",
                teamAccess: "edit"
            }
        }
        const response = await fetch(`https://api.miro.com/v1/boards`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + authentication.MIRO_TOKEN
            },
            body: JSON.stringify(request),
            json: true
        })
        .catch (e => (e))

        const data = await response.json() 

        return {
            viewLink: data.viewLink,
            name: data.name
        }
}

const miroClient = {
    get: getBoard,
    createWithoutTitle: createBoardWithoutTitle,
    create: createBoard,
}

module.exports = miroClient