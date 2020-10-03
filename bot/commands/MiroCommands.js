const client = require("../client/MiroClient")

const argFunc = new Map();

argFunc.set("get", getBoard)

async function getBoard(args){
    const id = args.shift()

    const resp = await client.get(id)

    return `${resp.name} \n ${resp.description} \n ${resp.viewLink} \n`
}

function createBoard(args){

}

module.exports = { 
    func: function(args) { 
        const func = args.shift()

        return argFunc.get(func)(args)
     },
}
