const connectToMongo=require('./db');
const express = require('express')
var cors = require('cors')


connectToMongo();


const app = express()
const port = 4000

app.use(cors())
app.use(express.json());

//available routes
app.use('/auth',require('./routes/Auth'));
app.use('/notes',require('./routes/Notes'));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})