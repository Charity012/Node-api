const express = require ("express");
const mongoose = require ('mongoose');
const app = express();
const port = 8080;

//Specify Json middleware
app.use(express.json);

//Declare routes to use in your web browser
app.get('/', (req, res)=> {
    res.send('Hello there!')
});

app.get('/blog', (req, res) => {
    res.send("Hey Blog!")
})

//Route for saving data into the database
app.post('/product', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})



mongoose.connect('mongodb+srv://sammycharity:ZuNCx0VWU16gznrd@nodeapi.lta3asi.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    app.listen(port, ()=> {
        console.log('abcsd')
    });
    console.log('Its successful')
}).catch((error) => {
    console.log('error')
})