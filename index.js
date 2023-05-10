const express = require('express')
const performanceRouter = require('./routes/performance.routes')
const PORT = process.env.PORT || 8080

const app = express()
app.use(express.json())
app.use('/api', performanceRouter)
app.get('/', (req, res) => {
  res.send('HELLO POSTGRES + NODEJS + NODEMON!!!')
})

app.listen(PORT, () => console.log(`server started on port ${PORT}`))