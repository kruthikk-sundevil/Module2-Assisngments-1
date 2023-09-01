const express = require('express');
const app = express();
const port = 4000;// Port number made as 4000 in place of the default 3000

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('index');
});

app.post('/calculate', (req, res) => {
  try {
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);

    const addition = num1 + num2;
    const subtraction = num1 - num2;
    const multiplication = num1 * num2;
    const division = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';

    res.render('result', {
      num1,
      num2,
      addition,
      subtraction,
      multiplication,
      division,
    });
  } catch (error) {
    res.status(500).send('An error occurred.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
