const express = require('express');
const router = express.Router();

/**
 * @route         GET api/users/
 * @description   Get users
 * @access        Public
 */

router.get('/', (req, res) => {
  res.send('Hello users !');
});

module.exports = router;
