//using dotenv to secure the api key
const dotenv = require('dotenv');
dotenv.config();

//using express and designating a port
const express = require('express');
const app = express();
const port = 3090;

//Middleware for handling incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//setting up the server
app.get('/', (req, res) => {
    res.send('hello world');
    console.log(`Server is running on port ${port}`);
});

app.listen(port);



//This contains the url (id) and the application key (key) for the meaning cloud api.
const textapi = {
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
};