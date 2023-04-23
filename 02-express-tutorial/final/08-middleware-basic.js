const express = require('express')
const logger = require('../../logger')
const app = express()
const logger = require('./logger')

//  req => middleware => res

// const logger = (req, res, next) => {
//   const method = req.method
//   const url = req.url
//   const time = new Date().getFullYear()
//   console.log(method, url, time)
//   next()
// }

app.get('/', logger, (req, res) => {
  res.send('Home')
})
app.get('/about', logger, (req, res) => {
  res.send('About')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})


//Middle wares are every where in express server