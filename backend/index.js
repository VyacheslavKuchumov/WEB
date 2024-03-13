const express = require('express')
const app = express()
require('dotenv').config()
let cors = require('cors')

const auth_routes = require('./routes/auths')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const port = process.env.PORT

app.use(cors({
    origin: ['http://localhost:8080']
}))


app.use('/api/auth', auth_routes)

app.use((error, request, response, next) => {
    if (error instanceof SyntaxError)
        response.status(400).send({message: 'invalid data'})
    else
        next()
})




app.listen(port, () => {
    console.log('server started on port ' + port)
})