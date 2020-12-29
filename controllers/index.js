const router = require("express").Router();

const apiRoutes = require("./api");
const homePageRoute = require("./homePageRoute");

router.use("/", homePageRoute);
router.use("/api", apiRoutes);

module.exports = router;
