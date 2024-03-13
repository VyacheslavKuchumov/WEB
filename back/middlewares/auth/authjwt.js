const jwt = require('jsonwebtoken')
require('dotenv').config()

const secret = process.env.SECRET

const verifyToken = (req, res, next) => {
    let token = req.headers["x-acces-token"]
    if (!token) return res.status.send({message: 'No token provided'})

    jwt.verify(token, secret, function (err, decoded){
        if (err) return res.status(401).send({message: 'unauthorized!'})
    })
}