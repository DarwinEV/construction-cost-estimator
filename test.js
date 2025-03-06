// require dotenv, express, mysql2, and cors
// store the output for everything but dotenv
require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

// define the app as express
const app = express();

// Create Mysql connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_UBER,
    password: process.env.DB_PASS,
    database: "construction_estimates"
});

// connect to MySQL and define error output
db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ', err);
        return;
    }
    console.log('Connected to MySQL database');
});


// CRUD API for estimate_items
// CREATE: Add a new estimate
app.post('/estimates', (req, res) => {
    const { estimate_number, client_name, completion_time, total_cost, details, date_created } = req.body;
    const sql = `INSERT INTO estimates (estimate_number, client_name, completion_time, total_cost, details, date_created)
                 VALUES (?,?,?,?,?,?)`;
    db.query(sql, [estimate_number, client_name, completion_time, total_cost, details, date_created], (err, result) => {
        if (err) return res.status(500).json({ error: err.message});
        res.status(201).json({ message: 'Estimate added successfully', id: result.insertId });
    });
});


// READ:

