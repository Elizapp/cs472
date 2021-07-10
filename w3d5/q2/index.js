const express = require('express');
const app = express();
app.use(express.urlencoded({extended: false}));


app.get('/', function(req, res){

    var html =
        '<form action="/result" method="POST">'+
        '<div>' +
        '<label for="name">Name: </label>'+
        ' <input type="text" name="name" value="Rose" >'+
        ' <label for="age">Age: </label>'+
        ' <input type="text" id="age" name="age" value="17">'+
        ' <button type="submit">Submite Query</button>'+
        '</div>'+
        '</form>';

    res.send(html);

});

app.post('/result', function(req, res){
    let name = req.body.name;
    let age = req.body.age;
    res.send(`Welcome ${name} , your age is ${age}`);
});

app.listen(3000);