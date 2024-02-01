require('dotenv').config()
const mongoose = require('mongoose');
 

// Code for using the cloud mongodb atlas 
mongoose.connect('mongodb+srv://gursimranjeet0786:8OVLi6fzpl2fluBR@cluster0.5pe6ulb.mongodb.net/Polling-System',{
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