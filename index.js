const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();
const app = express();
const port = 5000;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zuy06.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
async function run() {
    try {
      await client.connect();
      console.log('connectet to database')

    //   const meals = client.db("meals");
    //   const mealsInfo = database.collection("mealsInfo");
      // create a document to insert
    //   const doc = {
    //     title: "Record of a Shriveled Datum",
    //     content: "No bytes, no problem. Just insert a document, in MongoDB",
    //   }
    //   const result = await haiku.insertOne(doc);
    //   console.log(`A document was inserted with the _id: ${result.insertedId}`);
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);

app.get('/',(req,res)=>{
    res.send('Hello all');
});

app.listen(port,()=>{
    console.log('this port is run on:',port);
})


// saheeb_tareque
// DsrqV7E1ZQL3KnyQ