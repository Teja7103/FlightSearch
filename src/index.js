const express = require('express');
const { PORT } = require('./config/serverConfig');

const startupServer = async ()=>{
    const app = express();
    // const PORT=3000;
    
    app.listen(PORT,()=>{
        console.log(`listening on ${PORT}`);
        // console.log(process);

    });
}

startupServer();