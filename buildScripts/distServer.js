import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';


/* eslint-disable no-console */
const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../dist/index.html'))
});

app.get('/users', function(req, res){
    res.json([
        {"id": 1,"firstName":"Alexa","lastName":"Patino","email":"apatino@gmail.com"},
        {"id": 2,"firstName":"Evelyn","lastName":"Norton","email":"enorton@yahoo.com"},
        {"id": 3,"firstName":"Sarah","lastName":"Gladly","email":"s.gladly@hotmail.com"},
        {"id": 4,"firstName":"Christian","lastName":"Grey","email":"cgrey@hotmail.com"},
      ]);
});

app.listen(port, function(err){
    if(err){
        console.log(err)
    }
    else {
        open('http://localhost:' + port);
    }
});
