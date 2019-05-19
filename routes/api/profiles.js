const express = require('express');
const router = express.Router();

/**
 * @route         GET api/profiles/
 * @description   Get profiles
 * @access        Public
 */

router.get('/', (req, res) => {
  res.send('Hello profiles !');
});

module.exports = router;