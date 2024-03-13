const express = require('express')
const app = express()
require('dotenv').config()
let cors = require('cors')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT

app.use(cors({
  origin: ['http://localhost:8080']
}))

const auth_routes = require('./routes/auths')
const user_routes = require('./routes/users')




app.use('/api/auth', auth_routes)
app.use('/api/users', user_routes)

app.use((error, request, reponse, next) => {
  if (error instanceof SyntaxError)
    reponse.status(400).send({ message: 'not valid date' })
  else
    next()
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
});