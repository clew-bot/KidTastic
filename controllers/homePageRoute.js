const router = require("express").Router();

router.get("/", async (req, res) => {
  res.render("homeland");
});
module.exports = router;
