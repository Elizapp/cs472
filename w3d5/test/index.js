const express = require('express');
const app = express();
app.use(express.urlencoded({extended: false}));

let list = ["first item", "second item", "third item", "Fourth item"];
app.get('/', function(req, res){
    let unorderedlist = "";
    for(let i =0;i < list.length; i++){
        unorderedlist += `<li>${list[i]}</li>`;
    }

    if(req.query.anytext){
        let fromPost = req.query.anytext
        unorderedlist += `<li>${fromPost}</li>`;
    }


    let html5 = '<!DOCTYPE html>' +
        '<html lang="en">' +
        '<head>' +
        '<meta charset="UTF-8">' +
        '<title>Title</title>' +
        '</head>' +
        '<body>' +
        '<ul ">'+
        unorderedlist +
        '</ul>' +
        '<a href="/add">Link to add</a>' +
        '</body>' +
        '</html>';
    res.send(html5);
});

app.get('/add', function(req, res){
    let html5 = '<!DOCTYPE html>' +
        '<html lang="en">' +
        '<head>' +
        '<meta charset="UTF-8">' +
        '<title>Title</title>' +
        '</head>' +
        '<body>' +
        '<form action="/add" method="POST">'+
        '<div>' +
        '<label for="name">Enter any text: </label>'+
        '<input type="text" name="anytext" value="test " > '+
        '<button type="submit">Submite Query</button>'+
        '</div>'+
        '</form>' +
        '</body>' +
        '</html>';
    res.send(html5);
});

app.post('/add', function(req, res){
    let anytext = req.body.anytext;
    res.redirect(`/?anytext=${anytext}`);
});

app.listen(3000);