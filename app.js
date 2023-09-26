const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send('Online Counseling Project');
});

const server = app.listen(1000, () => {
    console.log("Server is up and running");
})