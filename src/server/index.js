const dotenv = require('dotenv');
dotenv.config();

const textapi = {
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
};

console.log(textapi.application_id);
console.log(textapi.application_key);