const express = require('express');
let router = express.Router();
const pool = require('../module/pool')

router.get('/', (req, res) => {
    console.log('here',req);
    
    pool.query(`SELECT * FROM "user_info";`)
        .then((results) => {
            res.send(results.rows);
        }).catch((error) => {
            res.sendStatus(500);
            console.log('error', error);
        });//end GET pool query
});//end GET call server side

router.post('/', (req, res) => {
    console.log(req.body);
    pool.query(`INSERT INTO "user_info" ("first_name","last_name")
    VALUES ($1,$2);`, [req.body.first_name, req.body.last_name])
        .then((results) => {
            res.send(results.rows);
        }).catch((error) => {
            console.log('Error POSTING user from PostgreSQL', error);
            res.sendStatus(500);
        })//end POST pool query
});//end POST call server side


module.exports = router;