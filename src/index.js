const express = require('express')
require('./db/mongoose')
const cors = require('cors')
const projectRouter = require('./router/project')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(cors())
app.use(projectRouter)

app.listen(port, () => {
  console.log('Server running on port', port)
})