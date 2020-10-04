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
            let timePM = string.substring(5);
            let timeConverted = convertTime(timePM)

            eventObject.time = timeConverted
        }

    });
    let dateSplitted = eventObject.date.split('/')
    let startTimeSplitted = eventObject.time.split(':')
    
    let startDate = new Date(dateSplitted[2], dateSplitted[1] - 1, dateSplitted[0], startTimeSplitted[0], startTimeSplitted[1])

    let eventDetails = {
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

        console.log(args);
    //Test return
    if (args[0] === "create") {
        const event = handleCreateEvent(args);
        return event;
    }else{
        return "Comando inválido - use !calendar create name:NomeDoEvento date:dd/mm/aaaa time:HPM ou AM";
    }
     },
};