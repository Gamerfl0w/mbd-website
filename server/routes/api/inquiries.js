const express = require('express');
const mongodb = require('mongodb');
require('dotenv').config();  

const router = express.Router();

// Get Contacts
router.get('/dashboard/inquiries', async (req, res, next) => {
    const inquiries = await loadInquiriesCollection();
    res.status(200).send(await inquiries.find({}).toArray());
});

// Add Inquiry
router.post('/contact-us', async (req, res) => {
    const inquiries = await loadInquiriesCollection();
        await inquiries.insertOne({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          phone: req.body.phone,
          message: req.body.message,

          createdAt: new Date() 
        });    
          res.status(201).send();
    
});

// Delete Inquiry
router.delete('/dashboard/inquiries/:id', async (req, res) => {
    const inquiries = await loadInquiriesCollection();
    await inquiries.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    res.status(200).send();
});

async function loadInquiriesCollection(){
    const client = await mongodb.MongoClient.connect
    (process.env.VITE_CONN_STRING , {
        useNewUrlParser: true
    });

    return client.db().collection('contacts');
}

module.exports = router;