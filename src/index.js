const express = require('express');
//const router = require('./router');

const app = express();

app.get('/', (req, res) => res.status(200).send("deu certo?"));

app.listen(3000, ()  => console.log(`Server running on port 3000`));