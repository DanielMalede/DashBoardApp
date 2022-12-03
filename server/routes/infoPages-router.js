const router = require('express').Router()
const {
    getInfoPages,
    geInfoPagesById,
    createInfoPages,
    updateInfoPages,
    deleteInfoPages
} = require('../controllers/InfoPages-ctrl')

router.get('/',getInfoPages)
router.get('/getInfoPagesById/:id', geInfoPagesById)
router.post('/createInfoPages', createInfoPages)
router.put('/updateInfoPages/:id', updateInfoPages)
router.delete('/deleteInfoPages', deleteInfoPages)


module.exports = router;