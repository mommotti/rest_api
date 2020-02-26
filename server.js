const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.listen(3000, () => console.log('THE SERVER HAS STARTED'))