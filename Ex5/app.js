const express = require('express');
const app = express();
const port = 4000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

function simulateAsyncOperation() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Asynchronous operation completed!');
    }, 2000); // Simulating a 2-second delay
  });
}

app.get('/', async (req, res) => {
  res.render('async');
});

app.get('/simulate', async (req, res) => {
  try {
    const result = await simulateAsyncOperation();
    res.render('result', { result });
  } catch (error) {
    res.status(500).send('An error occurred.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
