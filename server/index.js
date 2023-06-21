const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

const products = require('./routes/api/products');
const inquiries = require('./routes/api/inquiries');

app.use('/api/products', products);
app.use('/api/inquiries', inquiries);

const port = process.env.PORT || 5000;

app.listen(port , () => console.log(`Server started on port ${port}`));