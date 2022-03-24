const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello colman!')
})

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`)
})