// Access to env variables
require('dotenv').config();

const mongoose = require('mongoose');
const app = require('./app');

const port = process.env.PORT || 5000;

// mongoose.Promise = global.Promise;
//
// mongoose
//   .connect(keys.mongoURI)
//   .then((connection) => {
//     console.log('\n=== Connected to MongoDB ===\n');
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

app.listen(port, () => console.log(`\n=== API up on port: ${port} ===\n`));
