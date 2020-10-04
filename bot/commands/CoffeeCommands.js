function coffee(){
    return {
        toggle: true,
        message: "@everyone coffee time team"
    }
}

function coffeeTime(time){
    return {
        toggle: true,
        message: `@everyone coffee time in ${time.shift()} minutes team!`
    }
}

const argFunc = new Map()

argFunc.set("now", coffee)
argFunc.set("time", coffeeTime)

module.exports = { 
    func: function(args) { 
        const func = args.shift()

        return argFunc.get(func)(args)
     },
}
