const express = require('express');
const router = express.Router();
bodyParser = require('body-parser').json();
const mainAPIController = require('../controllers/mainAPIController')


router.get('/', mainAPIController.list);
router.get('/categories', mainAPIController.listCategories);
router.get('/listin', mainAPIController.listIn);
router.get('/listout', mainAPIController.listOut);
router.get('/:id', mainAPIController.detail);
router.post('/create', bodyParser, mainAPIController.create);
router.post('/delete/:id', mainAPIController.destroy);
router.put('/edit/:id', bodyParser, mainAPIController.update);
router.get('/listByCategory/:id', mainAPIController.listByCategory);




module.exports = router;