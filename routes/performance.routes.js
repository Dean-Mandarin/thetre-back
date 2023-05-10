const Router = require('express')
const router = new Router()
const performanceController = require('../controller/performance.controller')

router.post('/new-comment', performanceController.createComment)
router.get('/comments', performanceController.getComments)
router.put('/change-comment', performanceController.updateComment)
router.delete('/delete-comment/:id', performanceController.deleteComment)
router.get('/all-performances', performanceController.getAllPerformances)
router.get('/performances-by-genre/:genre', performanceController.getPerformancesByGenre)

module.exports = router