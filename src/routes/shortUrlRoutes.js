const express = require('express');

const router = express.Router();
const shortnerURLController = require('../controllers/shortUrlController');
const optionalAuth = require('../middleware/optionalAuth');

router.post('/shorten', optionalAuth, shortnerURLController.CreateShortnedUrl);
router.get('/:url', shortnerURLController.GetShortnedUrl);

module.exports = router;
