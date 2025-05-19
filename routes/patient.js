// patients.js
const db = require('./db');

const createPatientsTable = `CREATE TABLE IF NOT EXISTS patients (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  email VARCHAR(100),
  contact VARCHAR(15),
  age INT,
  address TEXT,
  medicalHistory TEXT
)`;

db.query(createPatientsTable, (err, results) => {
  if (err) console.error('Error creating patients table:', err);
  else console.log('Patients table ready');
});

// models/patient.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Patient = sequelize.define('Patient', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true },
  contact: DataTypes.STRING,
  age: DataTypes.INTEGER,
  address: DataTypes.TEXT,
  medicalHistory: DataTypes.TEXT,
});

module.exports = Patient;
