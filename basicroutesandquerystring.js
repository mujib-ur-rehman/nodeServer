const express = require('express')
const app = express()
const {
  products
} = require('./data.js')

app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1><a href=/api/products>Products</a>')
  // res.json(products)
})

app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const {
      id,
      name,
      image
    } = product;
    return {
      id,
      name,
      image
    }
  })
  res.json(newProducts)
})

app.get('/api/products/:productid', (req, res) => {
  const {
    productid
  } = req.params
  const singleProducts = products.find((product) => product.id === Number(productid))
  if (!singleProducts)
    return res.status(404).send(`Product doesn't exist`)
  res.json(singleProducts)
})

app.get('/api/v1/query', (req, res) => {
  // console.log(req.query)
  const {
    search,
    limit
  } = req.query
  let sortedProducts = [...products]
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search)
    })

  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }
  if (sortedProducts.length < 1) {
    return res.send('no products')
  }

  res.json(sortedProducts)
})

app.listen(5000, () => {
  console.log('Server is listening')
})