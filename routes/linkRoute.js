const express = require('express');
const router = express.Router();

const linkController = require('../controllers/linkController.js');

router.get('/:title', linkController.redirect);

router.get('/', linkController.returnAll);

router.post('/', linkController.create);

router.delete('/:id', linkController.deleteOne);

router.put('/:id', linkController.putOne);

module.exports = router;