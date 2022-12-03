const router = require('express').Router()
const {
    getCategory,
    geCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
} = require('../controllers/category-ctrl')

router.get('/',getCategory)
router.get('/getCategoryById/:id', geCategoryById)
router.post('/createCategory', createCategory)
router.put('/updateCategory/:id', updateCategory)
router.delete('/deleteCategory', deleteCategory)


module.exports = router;