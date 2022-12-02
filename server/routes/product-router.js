const router = require('express').Router()
const {
    getProduct,
    getProductsById,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/products-ctrl')

router.get('/',getProduct)
router.get('/getProductsById/:id', getProductsById)
router.post('/createProduct', createProduct)
router.put('/updateProduct/:id', updateProduct)
router.delete('/deleteProduct', deleteProduct)


module.exports = router;