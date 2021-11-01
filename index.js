const express = require("express");
const port = 9000;

const app = express();

const db = require("./config/mongoose");


app.use(express.urlencoded());
app.use(express.static("assets"));

app.use('/',require('./routes'));

//set up template engine
app.set('view engine','ejs');
app.set('views','./views');



app.listen(port,(err)=>{
    if(err){
        console.log(`There is an error on port number :- ${port}`);
        return;
    }

    console.log(`Server is up and running on port number ${port}`);

});