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

router.put('/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;
    pool.query(`UPDATE "user_info" SET "first_name"=$1, "last_name"=$2 WHERE "id"=$3;`, [body.first_name, body.last_name, id])
    .then(() => {
        res.sendStatus(200);
    }).catch(error => {
        console.log('error updating user', error);
        res.sendStatus(500);
    });//end PUT pool query
});//end PUT call server side


module.exports = router;