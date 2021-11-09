console.log("Express Tutorial")
const http = require('http')

const server = http.createServer((req, res) => {
  const url = req.url
  if (url === '/') {
    res.writeHead(200, {
      'content-type': 'text/html'
    })
    res.write('<h1>Home<h1>')
    res.end()
  } else if (url === '/about') {
    res.writeHead(200, {
      'content-type': 'text/html'
    })
    res.write('<h1>About<h1>')
    res.end()
  } else {
    res.writeHead(404, {
      'content-type': 'text/html'
    })
    res.write('<h1>Error Page not found<h1>')
    res.end()
  }
  //   console.log(req.url)
  // console.log('user hit server')

})

server.listen(5000)