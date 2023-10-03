const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.sendFile('./index.html',{root: __dirname });
});

const server = app.listen(1000, () => {
    console.log("Server is up and running");
})