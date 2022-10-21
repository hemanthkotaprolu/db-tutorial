const mongoose = require('mongoose');

const connectionParams = {
    useNewUrlParser : true,
    useUnifiedTopology: true,
}

mongoose.connect(
  <mongodb connection string>,
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

fruit.save();



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
