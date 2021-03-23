var express = require('express');
var app = express();
app.get('/',(req,res)=> {
    res.send('Server is Working!!');
})


app.listen(8080,()=>{
    console.log("Server is ready!!");
})