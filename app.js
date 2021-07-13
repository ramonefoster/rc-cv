'use strict';

const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 5000


// require('dotenv').config()

//parsing middleware
app.use(express.urlencoded({ extended: true}))

//Setup handlebars engine and views location
app.set('view engine', 'hbs')

//define paths for express config
const publicDirectoryPath = path.join(__dirname, '/assets')
const viewsPath = path.join(__dirname, '/views')

//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

//Setup static dir to serve
app.use(express.static(publicDirectoryPath))

//index
app.get('/', (req, res) => {
    res.render('index')
})
app.get('/index', (req, res) => {
    res.render('index')
})
app.get('/works', (req, res) => {
    res.render('works')
})
app.get('/astro', (req, res) => {
    res.render('astro')
})
app.get('/me', (req, res) => {
    res.render('me')
})
app.get('/contact', (req, res) => {
    res.render('contact')
})



app.listen(port, () => console.log('listening on port: ' + port))