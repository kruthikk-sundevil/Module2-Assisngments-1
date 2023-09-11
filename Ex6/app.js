//Import the required modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');

// Create an instance of express
const app = express();

// We use the 'body-parser' middleware to parse the incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
// Set the view engine to ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));
// console.log('views', path.join(__dirname, 'views'));



app.get("/", (req, res) => {
    res.render("httpRequest");
});

app.get("/simulateAsync", (req, res) => {
    setTimeout(() => {
      res.json({ message: "Asynchronous operation completed!" });
    }, 2000);
  });

app.post("/makeRequest", async (req,res) => {
    const { url } = req.body;
    console.log(`url - ${url}`)
    try {
        const response = await axios.get(url);
        console.log(`response is ${response}`)
        res.json(response.data);
    }catch(error) {
        res.json({ error: error.message });
    }
})


// Start the server on port 4000,,
// Note we are advertising the service on port number 4000 and not 3000 this time
var port = 4000
//NOTE
// the quotes are replaced by back ticks ` next to keys caps 1
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});