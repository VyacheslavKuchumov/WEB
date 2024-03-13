const {auth, get_auth_table} = require('../../models/auths')

checkDuplicateEmail = (req, res, next) =>{
    get_auth_table()
    auth.findOne({
        where:{
            email: req.body.email.toLowerCase()
        }
    }).then(user => {
        if (user){
            res.status(400).send({message: 'Email is already in use! bruh'})
            return
        }
        next()
    })
}

const verifySignUp = {
    checkDuplicateEmail
}

module.exports = verifySignUp