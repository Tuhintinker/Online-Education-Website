// db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // replace with your MySQL username
  password: 'root', // replace with your MySQL password
  database: 'hospital_db', // replace with your database name
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

module.exports = connection;

// db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('hospital_db', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize.authenticate()
  .then(() => console.log('Connected to MySQL database'))
  .catch((err) => console.error('Error connecting to MySQL:', err));

module.exports = sequelize;

