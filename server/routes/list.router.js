const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

router.get('/', (req, res) => {
    const sqlQueryText = `SELECT * FROM groceries`;
    pool.query(sqlQueryText)
    .then( result => {
        res.send(result.rows);
    })
    .catch(err => {
        console.log('Error making GET request to database', error);
        res.sendStatus(500);
    })
})


module.exports = router;