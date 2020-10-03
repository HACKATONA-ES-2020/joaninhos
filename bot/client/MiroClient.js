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
            link: data.viewLink
        }

    } catch (e) {
        return "error"
    }
}

async function shareBoard(id){
    try {
        const response = await fetch(`https://api.miro.com/v1/boards/${id}`)
        const data = await response.json();

        data.forEach(field => {
            const board = {
                name:  field.name,
                description: field.description,
                link: field.viewLink
            }
        });

        console.log(data)

        return data
    } catch (e) {
        return "error"
    }
}

const miroClient = {
    get: getBoard,
    share: shareBoard,
}

module.exports = miroClient