const router = require('express').Router()
const {
    getFinancialSummary,
    geFinancialSummaryById,
    createFinancialSummary,
    updateFinancialSummary,
    deleteFinancialSummary
} = require('../controllers/financialSummary-ctrl')

router.get('/',getFinancialSummary)
router.get('/getFinancialSummaryById/:id', geFinancialSummaryById)
router.post('/createFinancialSummary', createFinancialSummary)
router.put('/updateFinancialSummary/:id', updateFinancialSummary)
router.delete('/deleteFinancialSummary', deleteFinancialSummary)


module.exports = router;