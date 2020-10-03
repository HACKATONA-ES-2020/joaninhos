let person = {
    author: "",
}

let people = []

const argFunc = new Map();

argFunc.set("hello", welcome)
argFunc.set("bye", bye)
argFunc.set("print", print)

function print(){
    return person
}

function welcome(){
    person["initialTime"] = new Date().toLocaleTimeString()

   return `${person.author} started to work at ${person["initialTime"]}`
}

function bye(){
    person["finalTime"] = new Date().toLocaleTimeString()
    // person.totalTime = person.finalTime - person.initialTime

    return `${person.author} finished to work at ${person["finalTime"]}`
}

module.exports = { 
    func: function(args) { 
        const func = args.shift()
        person["author"] = args[0].username

        return argFunc.get(func)();
     },
};
