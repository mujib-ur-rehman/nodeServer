const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url
  const time = new Date().getFullYear()
  console.log('logger')
  console.log(method, url, time)
  next()
}

module.exports = logger