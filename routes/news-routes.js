const express = require('express');

const newsControllers = require('../controllers/news-controllers');

const router = express.Router();

router.get('/', newsControllers.getNews);

router.get('/:nid', newsControllers.getNewById);

router.post('/', newsControllers.createNew);

module.exports = router;