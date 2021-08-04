require('dotenv').config()

const express = require ('express')

const port = process.env.PORT

const sobre = require('./src/routes/sobre')

const app = express()

app.use('/sobre', sobre)




app.listen(port, () => {console.log(port) } )
