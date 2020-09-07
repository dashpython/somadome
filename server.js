const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/somalifeapp'));


app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname + '/dist/somalifeapp/index.html'));
})

//console.log('Console listening');

app.listen(process.env.PORT||8080);
