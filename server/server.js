//requires
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const spikeRouter = require('./routes/spike-router')

//globals
const PORT = 5000;
//uses
app.use(bodyParser.json());
app.use(bodyParser({extended:true}));
app.use(express.static('server'));
app.use('/spike', spikeRouter)
//spins
app.listen(PORT, ()=>{
    console.log('Server up and running on PORT:', PORT);
    
})