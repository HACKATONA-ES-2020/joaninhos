const authentication = require("../config/config.json")
const fetch = require("node-fetch")

async function getBoard(id){
    try {
        const response = await fetch(`https://api.miro.com/v1/boards/${id}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + authentication.MIRO_TOKEN
            }
        })

        const data = await response.json() 
        
        return {
            name: data.name,
            description: data.description,
            viewLink: data.viewLink
        }
    } catch (e) {
        return "error"
    }
}

async function createBoard(){
    try {
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

        const data = await response.json() 

        console.log(data)

        return {
            viewLink: data.viewLink
        }
    } catch (e) {
        return "error"
    }
}

const miroClient = {
    get: getBoard,
    create: createBoard,
}

module.exports = miroClient