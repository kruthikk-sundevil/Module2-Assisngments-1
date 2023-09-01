const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/fetch', async (req, res) => {
  try {
    const url = req.body.url;

    // Make an HTTP GET request using axios
    const response = await axios.get(url);

    // Pass the response data to the result template
    res.render('result', { responseData: response.data });
  } catch (error) {
    res.status(500).send('An error occurred.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
