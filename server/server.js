const express = require('express');
const server = express();
const csv=require('csvtojson')
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('../Database.db');


server.get("/json", (req, res) => {
    res.json({ message: "Hello world" });
 });

 server.get("/all", (req, res) => {
    let sql = `SELECT * from observation ORDER BY id LIMIT 1000`;
    db.all(sql, [], (err, rows) => {
        if (err) {
          throw err;
        }
        res.json(rows);
        rows.forEach((row) => {
          console.log(row);
        });
      });
 });

server.get("/all", (req, res) => {
    csv().fromFile(__dirname + '/../history.csv').then(
        (data) => {
            res.json(data)
        }
    )
});

server.get("/lasthour-sumary", (req, res) => {
    csv().fromFile(__dirname + '/../history.csv').then(
        (data) => {

            res.json(data)
        }
    )
});
const port = 4000;

server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});