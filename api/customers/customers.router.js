const controller = require('./customers.controller');
const router = require('express').Router();


router.get('/', controller.getAll)
router.get('/:id', controller.getOne)
router.post('/', controller.postOne)
router.put('/:id', controller.putOne)
router.patch('/:id', controller.patchOne)
router.delete('/:id', controller.deleteOne)

module.exports = router;