//allows us to use mysql and build our connection
const mysql = require('mysql');
//allows us to use dotenv npm package and connect our .env file
require('dotenv').config();


const connection = mysql.createConnection({
  host: 'localhost',

  // Port for my sql will always be 3306
  port: 3306,

  // We are using an env package here as my password is used in other applications
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  connection.end();
});