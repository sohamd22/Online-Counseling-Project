const express = require("express");
const app = express();

const path = require('path')
app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile('./index.html',{root: __dirname });
});

app.get('/login-patient', (req, res) => {
    res.sendFile('./user-auth.html',{root: __dirname });
});

app.get('/signup-patient', (req, res) => {
    res.sendFile('./user-auth.html',{root: __dirname });
});

app.get('/login-professional', (req, res) => {
    res.sendFile('./user-auth.html',{root: __dirname });
});

app.get('/signup-professional', (req, res) => {
    res.sendFile('./user-auth.html',{root: __dirname });
});

const server = app.listen(1000, () => {
    console.log("Server is up and running");
})