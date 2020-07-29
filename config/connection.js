// set up MySQL connection
var mysql = require("mysql");
require("dotenv").config();
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'coffeepot',
  database: 'burgers_db'
  });
};

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "",
//   database: "burgers_db"
// });


// make connection
connection.connect();

// export connection for ORM to use
module.exports = connection;