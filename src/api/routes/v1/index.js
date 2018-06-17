const express = require('express');

const router = express.Router();

/**
 * GET v1/healthz
 */
router.get('/healthz', (req, res) => res.send('OK'));

/**
 * GET v1/docs
 */
router.use('/docs', express.static('docs'));

module.exports = router;
