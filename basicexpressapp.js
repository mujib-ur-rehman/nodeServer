const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('./public'))

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, './navbar-app/index.html'))
// })

app.all('*', (req, res) => {
  res.status(400).send('Error Page not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000...')
})

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen