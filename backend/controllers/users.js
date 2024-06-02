const { user } = require('../models/users')

const getUserByUid = async (req, res) => {
    try {
        const current_user = await user.findOne({ where: { uid: req.params?.uid } })
        if (!current_user) return res.status(404).send({ message: 'User not found' })
        return res.json(current_user)
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await user.findAll()
        if (!users) return res.status(404).send({ message: 'users not found' })
        return res.json(users)
    } catch (error) {
        return res.status(500).send({ message: error.message })
    }
}

const updateLike = async (req,res)=>{
    const {likes} = req.body
    try{
        const current_user=await user.update({likes: likes},
            {where: {uid:req.userUid}})
        if (!current_user) return res.status(404)
        return res.json(current_user)
    } catch (error){
        return res.status(500).send({message:error.message})
        
    }

}
module.exports = {
    getUserByUid,
    updateLike,
    getAllUsers
}
