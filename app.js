const express = require('express')
const app = express()
const port = 5011

app.get('/', (req, res) => {
  res.send('Hello World!\
  whats poppin')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})