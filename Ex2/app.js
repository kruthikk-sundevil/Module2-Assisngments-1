const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const books = [
  { title: 'Book 1', author: 'Author 1', publicationYear: 2020 },
  { title: 'Book 2', author: 'Author 2', publicationYear: 2018 },
];

app.get('/', (req, res) => {
  res.render('index', { books });
});

app.get('/add', (req, res) => {
  res.render('add');
});

app.post('/add', (req, res) => {
  const { title, author, publicationYear } = req.body;
  const newBook = { title, author, publicationYear: parseInt(publicationYear) };
  books.push(newBook);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`); // 3000
});
