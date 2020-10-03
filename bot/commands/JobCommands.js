// let person = {
//     author: "",
//     initialTime: new Date().toLocaleTimeString(),
//     finalTime: new Date().toLocaleTimeString()
// }

let people = []

const argFunc = new Map();

argFunc.set("hello", welcome)
argFunc.set("bye", bye)
argFunc.set("print", print)

function print(){
    let peopleOnline = ''

    people.forEach( person => {
            console.log(person)
            peopleOnline += `${person} is online! \n`
        }
    )

    return peopleOnline
}

function welcome(author){
//     let personAux = people.find(author)
//     personAux.initialTime = new Date().toLocaleTimeString()

//    return `${personAux.author} started to work at ${personAux.initialTime}`
}

function bye(author){
    // person.finalTime = new Date().toLocaleTimeString()
    // // person.totalTime = person.finalTime - person.initialTime

    // return `${person.author} finished to work at ${person["finalTime"]}`
}

module.exports = { 
    func: function(args) { 
        const func = args.shift()
        people.push({
            author: args[0].username,
            initialTime: '',
            finalTime: '',
        })

        return argFunc.get(func)(args[0].username);
     },
};
