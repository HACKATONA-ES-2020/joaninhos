const convertTime = require('convert-time');

function handleCreateEvent(contents) {

    eventObject = {
        date: "",
        time: "",
        name: ""
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

    });
    const dateSplitted = eventObject.date.split('/')
    const startTimeSplitted = eventObject.time.split(':')
    
    const startDate = new Date(dateSplitted[2], dateSplitted[1] - 1, dateSplitted[0], startTimeSplitted[0], startTimeSplitted[1])

    const eventDetails = {
        description: eventObject.name,
        dateTime: startDate
    }

    try {
        return `Evento ${eventDetails.description} criado! (${eventDetails.dateTime})`
    } catch (e){
        return e
    }
}


// Exports
module.exports = { 
    func: function(args) { 

        if (args[0] === "create") {
            const event = handleCreateEvent(args);
            return event;
        }else{
            return "Invalid command - use !calendar create name:EventName date:dd/mm/aaaa time:hPM or AM";
        }
    },
};