const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const routes=require('./routes/api');
const cors = require("cors");                //npm install cors


const app=express();
app.use(cors());

mongoose.connect('mongodb://localhost:27017/AllApps', { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.Promise=global.Promise;

app.use(bodyParser.json());

app.use('/api',routes);
app.use(function(err,req,res,next){
    res.status(405).send({err:err.message});
});

app.listen(process.env.port || 4000, function(){
    console.log("Now Listening for Request!!");
});