const express = require('express');
const app = express();
const port = 4000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const fruits = ['Apple', 'Banana', 'Orange'];

app.get('/', (req, res) => {
  res.render('fruits', { fruits });
});

app.post('/add', (req, res) => {
  const newFruit = req.body.fruit;
  fruits.push(newFruit);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
