const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const User = require('./user'); // Import the User constructor

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/submit', (req, res) => {
  const { name, age, email } = req.body;

  // Create a new user object using the constructor function
  const newUser = new User(name, parseInt(age), email);

  res.render('result', { newUser }); // Pass the user object to the result template
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
