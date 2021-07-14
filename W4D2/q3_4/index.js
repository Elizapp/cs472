const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use(express.urlencoded({extended: false}));
var parseurl = require('parseurl')
var session = require('express-session')

app.use(express.json());
app.use('/js', express.static(path.join(__dirname, 'js')));

app.use(session({
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    secret: 'Any word',
}));

app.use(function (req, res, next) {
    if (!req.session.views) {
        req.session.views = {}
    }
    var pathname = parseurl(req).pathname
    req.session.views[pathname] = (req.session.views[pathname] || 0) + 1
    next()
})

let products = [
    {name:"Pretty white shoes",description: "The prettiest shoes you ever saw", price: 23.80, id:1 },
    {name: "Yellow dresses",description: "Made of the best clothe materials, floral and nice", price: 45.10, id:2 },
    { name: "Red boots",description: "Packaging that symbolises the brand's avant-garde style, designed to make your style experience unique", price: 67.00, id:3 }
    ];
app.get('/', (req, res) => {
    res.render("product", {
        products: products,
    });
});

app.use((req, res, next) => {
    if (!req.session.carShoppingProducts) {
        req.session.carShoppingProducts = [];
        req.session.total = 0;
    }
    next();
});

 //session.carShoppingProducts = [];

app.post('/addToCart/prod/1', (req, res) => {
    let count = req.session.views['/addToCart/prod/1'];
    req.session.total += 1;
    if(count <= 1){
        let name = req.body.name;
        let id = req.body.id;
        let price = req.body.price;
        let description = req.body.description;
        req.session.carShoppingProducts.push({"id": id, "name": name, "price": price, "description": description, "quantity": count});
    }else{
        req.session.carShoppingProducts[0].price = parseFloat(req.body.price) * count;
        req.session.carShoppingProducts[0].quantity = count;
    }
    res.render("shoppingcart", {
        carShoppingProducts: req.session.carShoppingProducts,
        total: req.session.total,
    });
});
app.post('/addToCart/prod/2', (req, res) => {
    let count2 = req.session.views['/addToCart/prod/2'];
    req.session.total += 1;
    if(count2 <= 1){
        let name = req.body.name;
        let id = req.body.id;
        let price = req.body.price;
        let description = req.body.description;
        req.session.carShoppingProducts.push({"id": id, "name": name, "price": price, "description": description, "quantity": count2});
    }else{
        req.session.carShoppingProducts[1].price = parseFloat(req.body.price) * count2;
        req.session.carShoppingProducts[1].quantity = count2;
    }
    res.render("shoppingcart", {
        carShoppingProducts: req.session.carShoppingProducts,
        total: req.session.total,
    });
});
app.post('/addToCart/prod/3', (req, res) => {
    let count3 = req.session.views['/addToCart/prod/3'];
    req.session.total += 1;
    if(count3 <= 1){
        let name = req.body.name;
        let id = req.body.id;
        let price = req.body.price;
        let description = req.body.description;
        req.session.carShoppingProducts.push({"id": id, "name": name, "price": price, "description": description, "quantity": count3});
    }else{
        req.session.carShoppingProducts[2].price = parseFloat(req.body.price) * count3;
        req.session.carShoppingProducts[2].quantity = count3;
    }
    res.render("shoppingcart", {
        carShoppingProducts: req.session.carShoppingProducts,
        total: req.session.total,
    });
});
app.listen(3000);