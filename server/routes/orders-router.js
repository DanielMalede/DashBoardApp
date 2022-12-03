const router = require('express').Router()
const {
    getOrders,
    geOrdersById,
    createOrders,
    updateOrders,
    deleteOrders,
} = require('../controllers/orders-ctrl')

router.get('/',getOrders)
router.get('/getOrdersById/:id', geOrdersById)
router.post('/createOrders', createOrders)
router.put('/updateOrders/:id', updateOrders)
router.delete('/deleteOrders', deleteOrders)


module.exports = router;