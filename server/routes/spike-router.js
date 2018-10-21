const express = require('express');
let router = express.Router();
const pool = require('../module/pool')

router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "user_info";`)
        .then((results) => {
            res.send(results.rows);
        }).catch((error) => {   
            res.sendStatus(500);
            console.log('error', error);
        });//end GET pool query
});//end GET call server side

router.post('/', (req, res) => {
    const newUser= req.body;
    const queryValues = [
        newUser.firstName,
        newUser.lastName,
    ];
    pool.query(`INSERT INTO "user_info" ("first_name","last_name")
    VALUES ($1,$2);`, queryValues)
        .then((results) => {
            console.log('HEEEEEEEYYYY', results);
            res.send(results.rows);
            
        }).catch((error) => {
            console.log('Error POSTING user from PostgreSQL', error);
            res.sendStatus(500);
        })//end POST pool query
});//end POST call server side


module.exports = router;