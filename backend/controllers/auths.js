const {get_auth_table, auth} = require('../models/auths')
const {user} = require('../models/users')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { password } = require('pg/lib/defaults')

require('dotenv').config()
const secret = process.env.SECRET
const {v4: uuidv4 } = require('uuid')

exports.signup = (req, res) => {
    get_auth_table()
    auth.create({
        email: req.body.email.toLowerCase(),
        role: "user",
        password: bcrypt.hashSync(req.body.password, 8),
        uid: uuidv4()
    }).then(async function (current_user){
        await user.create({
            uid: current_user.uid,
            name: req.body.name,
            likes: 0
        })
        res.status(201).send({message: 'registered suscesfuly', uid: current_user.uid})
    }).catch(err => {
        res.status(400).send({msg: err.message})
    })
}
