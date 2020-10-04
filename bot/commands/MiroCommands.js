const client = require("../client/MiroClient");

const argFunc = new Map();

argFunc.set("get", getBoard)
argFunc.set("create", createBoard)

async function getBoard(args){
    const id = args.shift()

    const resp = await client.get(id)

    return `${resp.name} \n ${resp.description} \n ${resp.viewLink} \n`
}

async function createBoard(args){
    const title = args.shift()

    return typeof(title) !== "string" ? createWithoutTitle() : createWithTitle(title)
}

async function createWithoutTitle(){
    const resp = await client.createWithoutTitle()

    return resp.viewLink
}

async function createWithTitle(title){
    const resp = await client.create(title)

    return `${resp.viewLink} \n ${resp.name}` 
}

module.exports = { 
    func: function(args) { 
        const func = args.shift()

        return argFunc.get(func)(args)
     },
}
