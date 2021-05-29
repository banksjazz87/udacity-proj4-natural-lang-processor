//using dotenv to secure the api key
const dotenv = require('dotenv');
dotenv.config();

//using express and designating a port
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3090;

//Middleware for handling incoming data
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static('dist'));

//setting up the server
app.get('/', (req, res) => {
    res.sendFile('dist/index.html');
    console.log(`Server is running on port ${port}`);
});

app.listen(port);

//When a get request is made for callData, it sends back the encrypted api information for meaning cloud.
app.get('/callData', sendApi);

function sendApi(req, res) {
    res.send(textapi);
}

//This contains the url (id) and the application key (key) for the meaning cloud api.
const textapi = {
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
};