const express = require('express');

const router = express.Router();
const shortnerURLController = require('../controllers/shortUrlController');

router.post('/shorten', shortnerURLController.CreateShortnedUrl);
router.get('/:url', shortnerURLController.GetShortnedUrl);

module.exports = router;
