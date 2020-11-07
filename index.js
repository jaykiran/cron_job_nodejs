const express = require('express');
const cron  = require('node-cron');
const fs = require('fs');

app = express();

//Schedule task to be run on the server
// cron.schedule('* * * * *', function(){
//     console.log("run task");
// });

cron.schedule('0 0 21 * *', function(){
    console.log('----------------');
    console.log('Running Cron Job');
    fs.unlink('./error.log', err => {
        if(err) throw err;
        console.log('Error file Successfully deleted');
    });
});

app.listen(3000);
