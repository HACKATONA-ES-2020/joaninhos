const mongo = require('mongodb').MongoClient;
const authentication = require('../config/config.json');

const dbEvents = (action, data, updatedData) => {
    return mongo.connect(authentication.MONGO_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (error, client) => {

        if(error) return console.log(error);
        
        const db = client.db('db_officebot');
        const collection = db.collection('events');

        if(action === 'add') {
            if(Array.isArray(data) && data.length > 0) return addMany(collection, data)
            return addOne(collection, data); 
        } else if(action === 'get') {
            if(data) return get(collection, data);
            return getAll(collection, data);
        } else if(action === 'update') {
            return update(collection, data, updatedData);
        } else if(action === 'remove') {
            return remove(collection, data);
        }
        
        client.close();
    })
}

const remove = (collection, data) => {
    collection.deleteOne(data, (err,res) => {
        if(err) return 'Não foi possível deletar evento.'
        else return 'Evento deletado com sucesso.'
    });
}

const update = (collection, data, updatedData) => {
    collection.updateOne(data, {'$set': updatedData}, (err,res) => {
        if(err) return 'Evento não pode ser alterado.'
        return 'Evento alterado com sucesso.'
    })
}

const get = (collection, data) => {
    return collection.findOne(data).toArray((err, items) => {
        if(err) return 'Evento não encontrado';
        return items;
    })
}

const getAll = async (collection, data) => {

    try {
        const allItems = await collection.find(data).toArray();
        return allItems;
    } catch(e) {
        console.log(e);
    }
    // return collection.find().toArray((err, items) => {
    //     console.log(items);
    //     if(err) return 'Eventos não encontrados.'
    //     return items;
    // })
}

const addOne = (collection, data) => {
    return collection.insertOne(data, (err, res) => {
        if(err) return 'Evento não pode ser criado.'
        return "Evento criado com sucesso.";
    })
}

const addMany = (collection, data) => {
    return collection.insertMany(data, (err, res) => {
        if(err) return 'Evento não pode ser criado.'
        return "Evento criado com sucesso.";
    })
}

module.exports = dbEvents;