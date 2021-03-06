const path = require('path')

require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
// const helmet = require('helmet')

const rootDir = require('./helpers/rootDir')
const router = require('./routes/router')

const app = express()

app.enable('trust proxy')

// app.use(helmet())

app.use(morgan('combined'))

app.set('views', path.join(rootDir, 'views'))
app.set('view engine', 'ejs')

app.use(function (request, response, next) {

    if (process.env.NODE_ENV != 'development' && !request.secure) {
        return response.redirect("http://scm-v1.ap-south-1.elasticbeanstalk.com/");
        // return response.redirect("http://" + request.headers.host + request.url);
    }

    next();
})

app.use(express.static(path.join(rootDir, 'public')))

app.use(router)

app.use((req, res, next) => res.redirect('/'))

app.listen(process.env.PORT)