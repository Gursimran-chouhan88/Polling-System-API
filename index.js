require('dotenv').config()
const express=require('express')
const bodyParser=require('body-parser')
const app=express();
const db=require('./config/mongoose');

// middle 
app.use(bodyParser.urlencoded({extended:true}));

// Routes
app.use('/',require('./routes/index'));
   
app.listen(process.env.PORT,function(err){
    if(err){
        console.log(err);
    }
    console.log("server is runing ...",process.env.PORT);
})