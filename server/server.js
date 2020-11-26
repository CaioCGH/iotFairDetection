const express = require('express');
const server = express();
const router = express.Router()
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('../mainModule/Database.db');

server.set('view engine', 'pug');

 server.get("/all", (req, res) => {
    let sql = `SELECT * from observation ORDER BY id  DESC LIMIT 1000`;
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


 server.get("/summary", (req, res) => {
    let sql = `SELECT * from observation WHERE timestamp >= datetime('now', '-3 hour', '-5 minutes')`;
    db.all(sql, [], (err, rows) => {
        if (err) {
          throw err;
        }
        objectsSeen = objectsHistogram(rows);

        res.json(objectsSeen);
        console.log(objectsSeen);
      });
 });

server.get("/fair-stage", (req, res) => {
  let sql = `SELECT * from observation WHERE timestamp >= datetime('now', '-3 hour', '-5 minutes')`;
  db.all(sql, [], (err, rows) => {
      if (err) {
        throw err;
      }
      objectsSeen = objectsHistogram(rows);
      console.log(objectsSeen);
      var status = "desconhecido";
      var traficObjects = objectsSeen['bicycle'] + objectsSeen['car'] +  objectsSeen['bus'] + objectsSeen['motorcycle'] + objectsSeen['truck'];
      if( traficObjects < 5){
        status = "em andamento";
      }else if(traficObjects < 20 &&  objectsSeen['person'] > 10){
        status = "finalizando";
      }else if(traficObjects > 20){
        status = "finalizada";
      }
      res.render("status", { title: "Fair status", status: status });
      });

});

function objectsHistogram(rows){
  objectsSeen = {
    'person': 0,
    'bicycle': 0,
    'car': 0,
    'bus': 0,
    'motorcycle': 0,
    'truck': 0
  };
  console.log(rows)
  for(var i = 0; i < rows.length; i++){
    objectsSeen[rows[i]['object_name']] = objectsSeen[rows[i]['object_name']] + 1;
  }
  return objectsSeen;
}


const port = 4000;

server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});
