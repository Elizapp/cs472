const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use(express.urlencoded({extended: false}));

let products = [{name:"Pretty white shoes",description: "The prettiest shoes you ever saw", price: 23.80, id:1 },
    {name: "Yellow dresses",description: "Made of the best clothe materials, floral and nice", price: 45.10, id:2 },
    { name: "Red boots",description: "Packaging that symbolises the brand's avant-garde style, designed to make your style experience unique", price: 67.00, id:3 },
    {name: "Casual Sandals",description: "Say hello to summer in the Serena, our first heeled sandal. A chic two-strap design and modern square toe will flatter every foot,", price: 32.0, id:2 }];
app.get('/', (req, res) => {
    res.render("product", {
        products: products,
    });
});

let carShoppingProducts = [];
app.post('/addToCart', (req, res) => {
    let name = req.body.name;
    let id = req.body.id;
    let price = req.body.price;
    let description = req.body.description;
    carShoppingProducts.push({"id": id, "name": name, "price": price, "description": description});
    res.render("shoppingcart", {
        carShoppingProducts: carShoppingProducts,
    });
});
app.listen(3000);