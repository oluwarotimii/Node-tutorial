const express = require('express')
const path = require('path')

const app = express()

// setup static and middleware
app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})




// const express = require('express')
// const path = require('path');

// const app = express()


// //setup static and middleware
// //static file means a file that the server doesnt have to  change
// app.use(express.static('./public'))


// // app.get('/', (req, res) => {
// //     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// //     console.log('user hit the resource')
// //   res.status(200).send('Home Page')
// //addinng to static assets
// //SSR server side rendering
// // })

// // app.get('/about', (req, res) => {
// //   res.status(200).send('About Page')
// // })

// app.all('*', (req, res) => {
//   res.status(404).send('<h1>resource not found</h1>')
// })

// app.listen(5000, () => {
//   console.log('server is listening on port 5000...')
// })

// // app.get
// // app.post
// // app.put
// // app.delete
// // app.all
// // app.use
// // app.listen

// // for a store  API


// // GET  www.store.com/api/orders get all orders
// // POST www.store.com/api/orders  place an order (send data)
// // GET www.store.com/api/orders/:id  get single order
// // PUT                            update specific order (params + send data)
// // DELETE                          delete order (path params)
