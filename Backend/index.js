const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors')

const app = express();
const PORT = 3002;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/testReact', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Define the product schema and model
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    qty: String
});

const Product = mongoose.model('products', productSchema);

const booksSchema = new mongoose.Schema({
    name: String,
    price: Number,
    qty: String,
    author:String
});

const Books = mongoose.model('books', booksSchema);

// CRUD routes
app.get('/products', async (req, res) => {
    try {
        const products = (await Product.find());
        const data = products.filter((item)=>{
            return item;
        })

        res.json(products);
    } catch (err) {
        res.status(500).send(err);
    }
});


app.get('/books', async (req, res) => {
    try {
        const books = (await Books.find());
        const data = books.filter((item)=>{
            return item;
        })

        res.json(books);
    } catch (err) {
        res.status(500).send(err);
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
