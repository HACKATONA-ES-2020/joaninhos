let people = []

const argFunc = new Map();

argFunc.set("hello", welcome)
argFunc.set("bye", bye)
argFunc.set("print", print)

function print(personAux) {
    let peopleOnline = ''
    people.forEach(person => {
        peopleOnline += `${person.author} is online! \n`
    })
    return peopleOnline
}

function welcome(personAux) {
    let personIsInTheList = false
    people.forEach(person => {
        if (person.author === personAux.author) {
            personIsInTheList = true
        }
    })

    if (!personIsInTheList) {
        people.push(personAux)
        personAux.initialTime = new Date().toLocaleTimeString()
        return `${personAux.author} started to work at ${personAux.initialTime}`
    }
    return
}

function bye(personAux) {
    personAux.finalTime = new Date().toLocaleTimeString()
    people.forEach((person, index) => {
        if (person.author === personAux.author) {
            people.splice(index, 1)
        }
    })

    return `${personAux.author} finished to work at ${personAux.finalTime}`
}

module.exports = {
    func: function (args) {
        const func = args.shift()
        const personAux = {
            author: args[0].username,
            initialTime: '',
            finalTime: '',
        }
        return argFunc.get(func)(personAux);
    },
};
