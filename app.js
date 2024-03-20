require('dotenv').config(); // for loading environment variables // for production grade application, we should use .env file to store the environment variables
const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter', (req, res)=>{
    res.send('Hello Twitter');
})

app.get('/login', (req, res)=>{
    res.send('Hello Login');
});

app.listen(process.env.PORT, ()=>{
    console.log(`Example app listening on port ${port}`)
})