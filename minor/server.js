// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let cart = [];

// Get the current cart
app.get('/api/cart', (req, res) => {
    res.json(cart);
});

// Add a product to the cart
app.post('/api/cart', (req, res) => {
    const { productName, price } = req.body;

    if (!productName || !price) {
        return res.status(400).json({ error: 'Both productName and price are required' });
    }

    cart.push({ productName, price });
    res.json({ message: 'Product added to the cart', cart });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
