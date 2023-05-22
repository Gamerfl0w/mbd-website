const express = require('express');
const mongodb = require('mongodb');
require('dotenv').config();

const router = express.Router();

// Get Products
router.get('/', async (req, res) => {
    const products = await loadProductsCollection();
    res.send(await products.find({}).toArray());
});

// Add Products
router.post('/', async (req, res) => {
    const products = await loadProductsCollection();
    await products.insertOne({
        name: req.body.name,
        price: req.body.price,
        createdAt: new Date() 
    });
    res.status(201).send();
});

router.put('/update-product/:id', async (req, res) => {
    const products = await loadProductsCollection();
    const filter = { _id: new mongodb.ObjectId(req.params.id) };

    const updateDocument = {
        $set: {
            name: req.body.name,
            price: req.body.price,
        },
    };

    await products.updateOne(filter, updateDocument);

    res.status(200).send();
});


// Delete Products
router.delete('/:id', async (req, res) => {
    const products = await loadProductsCollection();
    await products.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    res.status(200).send();
});

async function loadProductsCollection(){
    const client = await mongodb.MongoClient.connect
    (process.env.VITE_CONN_STRING , {
        useNewUrlParser: true
    });

    return client.db().collection('products');
}

module.exports = router;