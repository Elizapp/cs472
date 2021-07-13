const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use(express.urlencoded({extended: false}));

let list = [];
app.get('/', (req, res) => {
    res.render("index", {
        list: list,
    });
});

app.post('/add', (req, res) => {
    let item = req.body.item;
    list.push(item);
    res.render("add", {
        list:list,
    });
});


app.listen(3000);