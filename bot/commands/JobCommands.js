let people = []

const argFunc = new Map();

argFunc.set("hello", welcome)
argFunc.set("bye", bye)
argFunc.set("print", print)

function print(personAux){
    let peopleOnline = ''

    console.log(people)

    people.forEach( person => {
        if(person.finalTime === ''){
           peopleOnline += `${person.author} is online! \n`
        }
    })

    return peopleOnline
}

function welcome(personAux){
    personAux.initialTime = new Date().toLocaleTimeString()
    return `${personAux.author} started to work at ${personAux.initialTime}`
}

function bye(personAux){
    personAux.finalTime = new Date().toLocaleTimeString()

    people.forEach((person, index) => {
        if(person.author === personAux.author){
            people.splice(index, 1)
        }
   })

   console.log('%cJobCommands.js line:37 people', 'color: #007acc;', people);

    return `${personAux.author} finished to work at ${personAux.finalTime}`
}

module.exports = { 
    func: function(args) { 
        const func = args.shift()

        const personAux = {
            author: args[0].username,
            initialTime: '',
            finalTime: '',
        }

        console.log('%cJobCommands.js line:42 object', 'color: #007acc;', args[0].username);
        console.log(people.includes(args[0].username))

        let achei = false

        people.forEach(person => {
            if(person.author === args[0].username){
                achei = true
            }
       })

        if (!achei){
            people.push(personAux)
        }
        console.log('%cJobCommands.js line:56 people', 'color: #007acc;', people);

        return argFunc.get(func)(personAux);
     },
};
