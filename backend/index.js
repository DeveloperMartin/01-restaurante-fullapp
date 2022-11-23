const express = require('express')
const app = express()
const path = require('path')

console.log(path.join(__dirname, 'dist'))

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/frontend', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.get('/foods', function (req, res) {
  res.json({
    response: [{
      food: 'pizza'
    }, {
      food: 'tacos'
    }, {
      food: 'sushi'
    }]
  })
})

app.get('/drinks', function (req, res) {
  res.json({
    response: [{
      food: 'cerveza'
    }, {
      food: 'mojito'
    }, {
      food: 'monster'
    }]
  })
})

app.listen(3000, () => {
  console.log('La aplicacion se levanto en el puerto 3000')
})