const path = require('path')

require('dotenv').config()
const express = require('express')
const morgan = require('morgan')

const rootDir = require('./helpers/rootDir')
const router = require('./routes/router')

const app = express()

app.use(morgan('combined'))

app.set('views', path.join(rootDir, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(rootDir, 'public')))

app.use(router)

app.use((req, res, next) => res.sendStatus(404))

app.listen(process.env.PORT)