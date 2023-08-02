const express = require ("express");
const app = express();
const port = 5500


//Declare routes to use in your web browser
app.get('/', (req, res)=> {
    res.send('Hello there!')
});


app.listen(port, ()=> {
    console.log('abcsd')
});