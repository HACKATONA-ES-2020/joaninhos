const client = require("../client/MiroClient")

const argFunc = new Map();

argFunc.set("get", getBoard)
argFunc.set("create", createBoard)

async function getBoard(args){
    const id = args.shift()

    const resp = await client.get(id)

    return `${resp.name} \n ${resp.description} \n ${resp.viewLink} \n`
}

async function createBoard(){
    const resp = await client.create()

    return resp.viewLink
}

module.exports = { 
    func: function(args) { 
        const func = args.shift()

        return argFunc.get(func)(args)
     },
}
