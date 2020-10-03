const client = require("../client/MiroClient")

const argFunc = new Map();

argFunc.set("get", getBoard)

function getBoard(args){
    const id = args.shift()

    return client.get(id)
}

function createBoard(args){

}

module.exports = { 
    func: function(args) { 
        const func = args.shift()

        return argFunc.get(func)(args)
     },
}
