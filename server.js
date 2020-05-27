require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const api_routes = require('./api_routes')
const port = process.env.API_PORT || 5000

const app = express()

app.use(cors())
app.use(bodyParser())
app.use('/api', api_routes)

app.listen(port, () => console.log(`Listening on port ${process.env.API_PORT}`))