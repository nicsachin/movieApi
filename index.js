const express = require('express')
const app = express()
const main = require('./routes/main')
const movie = require('./routes/movie')
const bodyParser = require('body-parser')
//middlewares//////
// app.set('view engine', 'ejs')
// app.use(express.json())
// app.use(express.bodyParser())
app.use(bodyParser.urlencoded({ extended: true}))
 
// parse application/json
app.use(bodyParser.json())
app.use('/',main)
app.use('/api/',movie)


///port///////

const port = process.env.PORT || 3000

app.listen(port,()=>console.log(`listening on port ${port}`))
