const express = require('express');
const app = express();
const port = 3000; // You can change the port as needed

// Middleware to parse request body
app.use(express.urlencoded({ extended: true }));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files (CSS, JS, images, etc.) if needed
// app.use(express.static('public'));

// Route to render the "books.ejs" template
app.get('/books', (req, res) => {
    res.render('books');
});

// Route to handle form submission
app.post('/submit', (req, res) => {
    const { title, author } = req.body;
    // You can process the form data here as needed

    // Render the "userInfo.ejs" template with user information
    res.render('userInfo', { title, author });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
