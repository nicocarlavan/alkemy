const express = require('express');
const router = express.Router();
bodyParser = require('body-parser').json();
const mainAPIController = require('../controllers/mainAPIController')


router.get('/', mainAPIController.list);
router.post('/create', bodyParser, mainAPIController.create);
router.post('/delete/:id', mainAPIController.destroy);
router.put('/edit/:id', bodyParser, mainAPIController.update);



module.exports = router;