const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

app.use(authorize)

app.get('/', (req, res) => {
  res.send('home')
})
app.get('/about', (req, res) => {
  res.send('about')
})
app.get('/api/products', logger, (req, res) => {
  res.send('products')
})
app.get('/api/items', (req, res) => {
  res.send('items')
})

app.listen(5000, (req, res) => {
  console.log("Server is running")
})