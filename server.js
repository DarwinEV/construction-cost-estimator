require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON

// Create MySQL Connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "construction_estimates"
});

// Connect to MySQL
db.connect(err => {
    if (err) {
        console.error('Database connection failed: ', err);
        return;
    }
    console.log('Connected to MySQL database.');
});

// ==========================
// CRUD API for estimates (Main Estimate Table)
// ==========================

// CREATE: Add a new estimate
app.post('/estimates', (req, res) => {
    const { estimate_number, client_name, completion_time, total_cost, details, date_created } = req.body;
    const sql = `INSERT INTO estimates (estimate_number, client_name, completion_time, total_cost, details, date_created)
                 VALUES (?, ?, ?, ?, ?, ?)`;
    db.query(sql, [estimate_number, client_name, completion_time, total_cost, details, date_created], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Estimate added successfully', id: result.insertId });
    });
});

// READ: Get all estimates
app.get('/estimates', (req, res) => {   
    db.query('SELECT * FROM estimates', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// UPDATE: Update an estimate
app.put('/estimates/:id', (req, res) => {
    const { id } = req.params;
    const { estimate_number, client_name, completion_time, total_cost, details, date_created } = req.body;
    const sql = `UPDATE estimates 
                 SET estimate_number = ?, client_name = ?, completion_time = ?, total_cost = ?, details = ?, date_created = ? 
                 WHERE id = ?`;
    db.query(sql, [estimate_number, client_name, completion_time, total_cost, details, date_created, id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Estimate not found' });
        res.json({ message: 'Estimate updated successfully' });
    });
});

// DELETE: Remove an estimate
// DELETE an estimate by estimate_number
app.delete('/estimates/:estimate_number', (req, res) => {
    const { estimate_number } = req.params;

    // First, delete from estimate_items if there's a foreign key relation
    const deleteItemsSQL = 'DELETE FROM estimate_items WHERE estimate_number = ?';
    db.query(deleteItemsSQL, [estimate_number], (err) => {
        if (err) return res.status(500).json({ error: 'Failed to delete related items' });

        // Then, delete from estimates table
        const deleteSQL = 'DELETE FROM estimates WHERE estimate_number = ?';
        db.query(deleteSQL, [estimate_number], (err, result) => {
            if (err) return res.status(500).json({ error: 'Failed to delete estimate' });

            if (result.affectedRows > 0) {
                res.status(200).json({ message: `Estimate with estimate_number ${estimate_number} deleted successfully.` });
            } else {
                res.status(404).json({ message: 'Estimate not found' });
            }
        });
    });
});


// ==========================
// CRUD API for estimate_items (Items in Each Estimate)
// ==========================

// CREATE: Add an item to an estimate
app.post('/estimate_items', (req, res) => {
    const { estimate_number, item_name, quantity, unit_price, amount } = req.body;
    const sql = `INSERT INTO estimate_items (estimate_number, item_name, quantity, unit_price, amount)
                 VALUES (?, ?, ?, ?, ?)`;
    db.query(sql, [estimate_number, item_name, quantity, unit_price, amount], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Estimate item added successfully', id: result.insertId });
    });
});

// READ: Get all items in an estimate
app.get('/estimate_items/:estimate_number', (req, res) => {
    const { estimate_number } = req.params;
    db.query('SELECT * FROM estimate_items WHERE estimate_number = ?', [estimate_number], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// DELETE: Remove an item from an estimate
app.delete('/estimate_items/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM estimate_items WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Estimate item not found' });
        res.json({ message: 'Estimate item deleted successfully' });
    });
});

// Home Route
app.get('/', (req, res) => {
    res.send('Welcome to the Construction Estimates API');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
