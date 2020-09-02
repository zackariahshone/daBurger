//Create the connection


const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "burgers_db"
});

connection.connect(function(err){
    if(err) throw err;
    console.log("conntected as id " + connection.threadId);
})

module.exports = connection;