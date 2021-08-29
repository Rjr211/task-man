const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-man'

MongoClient.connect(connectionURL, { useNewURLParser: true}, (error, client )=> {

    if (error) {
        console.log('Unable to connect to database ❌')
    }

   const db = client.db(databaseName)

   db.collection('users').insertOne({
       name: 'Johnny',
       age: 34
   })
})