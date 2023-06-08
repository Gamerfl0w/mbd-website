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
router.get('/:page/:category', async (req, res, next) => {
  try {
    const Product = await loadProductsCollection();
    const page = req.params.page;
    const limit = 10;
    var query = {};

    if (req.params.category != "none") {
      query = { "category": req.params.category };
    }
    
      const products = await Product.find(query)
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .sort({ createdAt: 1 }).toArray();

      const count = await Product.countDocuments();

      return res.status(200).json({
          products,
          totalPages: Math.ceil(count / limit),
          currentPage: page,
      });  
    } catch (err) {
        next(err);
}
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
          category: req.body.category,
          createdAt: new Date() 
        });    
          res.status(201).send();
      }
  
    });

    // products.deleteMany({})
    
});

// Show Product
router.get('/get/show-product/:id', async (req, res) => {
  const products = await loadProductsCollection();
  const query = { _id: new mongodb.ObjectId(req.params.id) };
  res.send(await products.findOne(query));
});

//Update Product
router.put('/update-product/:id', async (req, res) => {
    const products = await loadProductsCollection();
    const filter = { _id: new mongodb.ObjectId(req.params.id) };

    handleMultipartData(req, res, async (err) => {
      if (err) {
        res.json({ msgs: err.message });

      }else{

        if(req.file == null) {
          const updateDocument = {
            $set: {
                name: req.body.name,
                category: req.body.category,
                price: req.body.price,
            },
          };

          await products.updateOne(filter, updateDocument);
          res.status(200).send();

        } else if(req.file != null) {
          const updateDocument = {
            $set: {
                name: req.body.name,
                category: req.body.category,
                price: req.body.price,
                image: req.file,
            },
          };

          await products.updateOne(filter, updateDocument);
          res.status(200).send();
        }

        
      }
    }); 
});


// Delete Product
router.delete('/:id', async (req, res) => {
    const products = await loadProductsCollection();
    await products.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    res.status(200).send();
});

// Search Product
router.get('/search/product/:name', async (req, res) => {
  const products = await loadProductsCollection();
  const name = req.params.name;
  const find = await products.find({ name: new RegExp(name, 'i') }).toArray()

  res.send(find);
});

async function loadProductsCollection(){
    const client = await mongodb.MongoClient.connect
    (process.env.VITE_CONN_STRING , {
        useNewUrlParser: true
    });

    return client.db().collection('products');
}

module.exports = router;