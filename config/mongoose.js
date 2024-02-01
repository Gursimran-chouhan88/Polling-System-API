require('dotenv').config()
const mongoose = require('mongoose');
 
const url = process.env.MONGO_URL
// Code for using the cloud mongodb atlas 
mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}
);


// Code for manually using the mongodb of local system

const db = mongoose.connection

db.on('error', console.error.bind(console, 'error connecting to database'));

db.once('open', ()=>{
    console.log("successfully connected to database : mongoDB");
});

module.exports = mongoose;