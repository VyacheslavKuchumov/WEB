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
module.exports = {
    getUserByUid
}
