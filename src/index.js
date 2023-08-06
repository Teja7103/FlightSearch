const express = require('express');
const { PORT } = require('./config/serverConfig');
const bodyParser = require('body-parser');

const startupServer = async ()=>{
    const app = express();
    // const PORT=3000;
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}))
    
    app.listen(PORT,()=>{
        console.log(`listening on ${PORT}`);
        // console.log(process);

    });
}

startupServer();