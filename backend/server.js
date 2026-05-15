
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

let products = [
  { id: 1, name: 'iPhone Pro X', price: 1199 },
  { id: 2, name: 'Gaming Laptop', price: 1899 }
]

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.post('/api/order', (req, res) => {
  console.log('Новый заказ:', req.body)
  res.json({ success: true, message: 'Заказ оформлен' })
})

app.listen(5000, () => {
  console.log('Backend запущен на http://localhost:5000')
})
