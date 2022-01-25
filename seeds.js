const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand')
    .then(() => {
        console.log('connection open!');
    })
    .catch(err => {
        console.log('ERROR HERE!!!');
        console.log(err);
    })

const seedProducts = [
    {
        name: 'Eggplant',
        price: 4.50,
        category: 'vegetable'
    },
    {
        name: 'Milk',
        price: 3.30,
        category: 'dairy'
    },
    {
        name: 'Orange',
        price: 0.50,
        category: 'fruit'
    },
    {
        name: 'Cheese',
        price: 1.25,
        category: 'dairy'
    }
];

Product.insertMany(seedProducts)
.then(res => {
    console.log(res)
})
.catch(err => {
    console.log(err)
})

