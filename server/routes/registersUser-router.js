const router = require('express').Router()
const {
    getUsers,
    getUsersById,
    createUser,
    updateUser,
    deleteUser,
} = require('../controllers/registersUsers-model')

router.get('/',getUsers)
router.get('/getUsersById/:id', getUsersById)
router.post('/createUser', createUser)
router.put('/updateUser/:id', updateUser)
router.delete('/deleteUser', deleteUser)


module.exports = router;