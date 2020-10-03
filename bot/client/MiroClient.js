const authentication = require("../config/config.json")
const fetch = require("node-fetch")

async function getBoard(id){

    try {
        fetch(`https://api.miro.com/v1/boards/${id}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + authentication.MIRO_TOKEN
            }
        }).then(response => response.json()).then(response => {
            const board = {
                name: response.name,
                description: response.description,
                link: response.viewLink
            }
            return JSON.stringify(board)
        })
    } catch (e) {
        return "error"
    }

}

async function shareBoard(id){

    try {
        const response = await fetch(`https://api.miro.com/v1/boards/${id}`)
        const data = await response.json();

        data.array.forEach(field => {
            board = {
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
    getBoard: getBoard,
    shareBoard: shareBoard,
}

module.exports = miroClient