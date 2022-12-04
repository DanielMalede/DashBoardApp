const router = require('express').Router()
const {
    getUsers,
    createUser,
} = require('../controllers/users-ctrl')

router.get('/',getUsers)
router.post('/createUser',createUser)

module.exports = router