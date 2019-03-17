const express = require('express');
const router = express.Router();
var pg = require('pg');

router.get('/clients', (req,res,next)=>{
    res.send('Hello Clients!!');
    //console.log("hfhhf");
});

router.post('/client', (req,res,next)=>{
    const result=[];
    var conString = "postgres://kavin:kavin008@localhost:5432/dhan";
    var client = new pg.Client(conString);
    client.connect();
    console.log("Connected to pg @ 5432");
    console.log(req.body);
    //var query =  client.query('INSERT INTO stu values($1)',[req.body.msg2]);
    //query.on('end', (res)=> {    
        client.end();
    //});
   


});

module.exports = router;