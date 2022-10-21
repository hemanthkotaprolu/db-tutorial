const mongoose = require('mongoose');

const connectionParams = {
    useNewUrlParser : true,
    useUnifiedTopology: true,
}

mongoose.connect(
  "mongodb+srv://kotaproluhemanth:mongodb@cluster1.49ync9e.mongodb.net/fruitsDB?retryWrites=true&w=majority",
  connectionParams
);


const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  name: "Apple",
  rating: 7,
  review: "Pretty solid as a fruit"
});

// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "John",
  age: 37
});

person.save();


// Replace the uri string with your connection string.

// const client = new MongoClient(uri);

// async function run() {
//   try {
//     const database = client.db('shopDB');
//     const movies = database.collection('products');
//     // Query for a movie that has the title 'Back to the Future'
//     const query = { name: 'Rubber' };
//     const item = await movies.findOne(query);
    
//     console.log(item);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }

// // const insertDocuments = function( )

// run().catch(console.dir);