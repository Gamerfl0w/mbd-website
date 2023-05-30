const express = require('express');
const mongodb = require('mongodb');
require('dotenv').config();  

const router = express.Router();

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads"), // cb -> callback
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${Math.round(
      Math.random() * 1e9
    )}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  },
});

const handleMultipartData = multer({
  storage,
  limits: { fileSize: 1000000 * 5 },
}).single("image");

// Get Products
router.get('/', async (req, res) => {
    const products = await loadProductsCollection();
    res.send(await products.find({}).toArray());
});

// Add Product
router.post('/', async (req, res) => {
    const products = await loadProductsCollection();
    handleMultipartData(req, res, async (err) => {
      if (err) {
        res.json({ msgs: err.message });
      }else{
        await products.insertOne({
          name: req.body.name,
          price: req.body.price,
          image: req.file,
          createdAt: new Date() 
        });    
          res.status(201).send();
      }
  
    });

    // products.deleteMany({})
    
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