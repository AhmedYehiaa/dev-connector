const express = require("express");
const router = express.Router();

/**
 * @route         GET api/posts/
 * @description   Get posts
 * @access        Public
 */

router.get("/", (req, res) => {
  res.send("Hello posts !");
});

module.exports = router;
