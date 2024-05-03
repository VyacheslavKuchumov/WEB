const express = require('express')
const app = express()
require('dotenv').config()
let cors = require('cors')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT

const auth_routes = require ('./routes/auth')
const users_routes = require ('./routes/users')
const restaurants_routes = require('./routes/restaurants')

app.use(cors({
    origin: ['http://localhost:8080']
}))

app.use('/api/auth', auth_routes)
app.use('/api/users', users_routes)
app.use('/api/restaurants', restaurants_routes)

app.use((error, request, response, next) => {
    if (error instanceof SyntaxError)
        response.status(400).send({ message: 'not valid data' })
    else
        next()
})

app.listen(port, () => {
    console.log(`server started on port ${port}`);
})