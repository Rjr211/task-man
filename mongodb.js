const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-man'

MongoClient.connect(connectionURL, { useNewURLParser: true}, (error, client )=> {

    if (error) {
        console.log('Unable to connect to database ❌')
    }

   const db = client.db(databaseName)

//    db.collection('users').insertOne({
//        name: 'Johnny',
//        age: 34
//    }, (error, result) => {
//         if (error) {
//             return console.log("unable to insert user")
//         }

//         console.log(result.ops)
//    })

    // Reference the collection and pass in collection name
    // Call insertMany and pass in array
    // db.collection('users').insertMany([
    //     {
    //         name: 'Joseph',
    //         age: 65
    //     },
    //     {
    //         name: 'Cal',
    //         age: 35
    //     }
    // ], (error, result) => {
    //     if (error){
    //         return console.log('Unable to insert documents')
    //     }
    //     // If insertion is successful print array of documents
    //     console.log(result.ops)
    // })

    db.collection('tasks').insertMany([
        {
            description: 'Meeting with Alyx',
            completed: true
        },
        {
            description: 'Attend fashion show',
            completed: true
        },
        {
            description: 'Pickup check from office',
            completed: false
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to successfully add documents')
        }

        return console.log(result.ops)
    })

})