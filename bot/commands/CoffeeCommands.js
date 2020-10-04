
function coffee(){

}

function coffeeTime(time){

}

const argFunc = new Map()

argFunc.set("", coffee)
argFunc.set("time", coffeeTime)

module.exports = { 
    func: function(args) { 
        const func = args.shift()

        return argFunc.get(func)(args)
     },
}
