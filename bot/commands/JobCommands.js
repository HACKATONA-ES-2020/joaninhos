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
    person["initialTime"] = new Date()

   return JSON.stringify(person)
}

function bye(author){
    person["finalTime"] = new Date()
    // person.totalTime = person.finalTime - person.initialTime

    return JSON.stringify(person)
}

module.exports = { 
    func: function(args) { 
        const func = args.shift()
        console.log(func)
        person["author"] = args.id

        return argFunc.get(func)();
     },
};
