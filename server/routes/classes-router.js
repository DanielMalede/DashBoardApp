const router = require('express').Router()
const {
    getClasses,
    geClassesById,
    createClasses,
    updateClasses,
    deleteClasses,
} = require('../controllers/Classes-ctrl')

router.get('/',getClasses)
router.get('/getClassesById/:id', geClassesById)
router.post('/createClasses', createClasses)
router.put('/updateClasses/:id', updateClasses)
router.delete('/deleteClasses', deleteClasses)


module.exports = router;