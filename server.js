var express = require('express');
var pg = require('pg');
var app = express();
var cors = require('cors');
var bp = require('body-parser');
var path = require('path');

const route = require('./router/route');

//connecting postgres..


//including required components
app.use('/api', route);

app.use(cors());
//app.use(bp.urlencoded({ extended: false }));

app.use(bp.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res)=>{
    res.send('Hello World');    //testing server...
});
app.listen(8080);
console.log("Magic happens");


