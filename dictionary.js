const express = require('express');
const app = express();
const wordDb = require('./word');
const router = express.Router();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const config = require('./sqlConfig');
connectDb = mysql.createConnection(config);

app.listen(3000, function () {
    console.log("program started");
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/dict.html");
})

app.get("/dict.css", (req, res) => {
    res.sendFile(__dirname + "/dict.css");
})

app.get("/jQuery.js", (req, res) => {
    res.sendFile(__dirname + "/jQuery.js");
})


app.get("/dict.js", (req, res) => {
    res.sendFile(__dirname + "/dict.js");
})

app.get('/search-word', function (req, res) {
    const searchWord = req.query.searchWord;
    let sql = `SELECT * FROM entries.entries Where word = '${searchWord}'`;
    connectDb.query(sql, function (err, data) {
        if (err) throw err;
        console.log(data);
        res.json({
            status: 200,
            data: data
        })
    })
});
