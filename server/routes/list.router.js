const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

router.post('/', (req, res) => {
    const newGrocery = req.body
    const sqlText = `INSERT INTO "groceries" ("item", "quantity", "unit") VALUES ($1, $2, $3);`
    pool.query(sqlText, [newGrocery.item, newGrocery.quantity, newGrocery.unit])
        .then((result) => {
            console.log('Added new grocery to the database ->', newGrocery)
            res.sendStatus(201)
        }).catch((error) => {
            console.log('Error in server POST', error)
            res.sendStatus(500)
        })
})


module.exports = router;