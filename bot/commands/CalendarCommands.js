const convertTime = require('convert-time');
const dbEvents = require('./../CRUDs/Event')

function handleCreateEvent(contents) {

    eventObject = {
        date: "",
        time: "",
        name: "",
        id: "",
    }

    contents.forEach(string => {      
        if(string.startsWith("name:")) {
            eventObject.name = string.substring(5);
        }

        if(string.startsWith("date:")) {
            eventObject.date = string.substring(5);
        }

        if(string.startsWith("time:")) {
            const timePM = string.substring(5);
            const timeConverted = convertTime(timePM)

            eventObject.time = timeConverted
        }

        if(string.startsWith("id:")) {
            eventObject.id = string.substring(3);
        }

    });
    const dateSplitted = eventObject.date.split('/')
    const startTimeSplitted = eventObject.time.split(':')
    
    const eventDetails = {
        description: eventObject.name,
        date: dateSplitted,
        startTime: startTimeSplitted,
        id: eventObject.id
    }

    dbEvents('add', eventDetails);

    return `Evento ${eventDetails.description} criado! (${eventDetails.dateTime})`
}

const handleShowEvents = async (args) => {
    const events = await dbEvents('getAll', args[1]);
    console.log(events);
    //let result = '';
    //events.filter(e => e.id === args[1]).forEach(i => result += `${i.description}, dia ${i.date[0]}/${i.date[1]}/${i.date[2]} às ${i.startTime[0]}:${i.startTime[1]}`);
    return events;
}


// Exports
module.exports = { 
    func: function(args) { 
        
        if (args[0] === "create") return handleCreateEvent(args);
        else if(args[0] === "show" && args.length === 2) return handleShowEvents(args);
    },
};