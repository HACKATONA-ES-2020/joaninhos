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
        const response = await fetch(`https://api.miro.com/v1/boards`, {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + authentication.MIRO_TOKEN
            }
        })

        const data = await response.json() 

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