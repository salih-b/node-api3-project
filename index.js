// code away!

const express = require('express');

const server = express();

// const theRouter = require('./posts/router.js');

//middleware
server.use(express.json());
// server.use('/api/posts', theRouter);

//endpoints
 
   
// End
const port = 7000;
server.listen(port, ()=>{
    console.log(`\n Listening on port ${port} ...... \n`);
});