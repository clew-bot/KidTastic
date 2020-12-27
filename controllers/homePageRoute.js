const router = require("express").Router();
const { Child, User } = require("../models");

router.get("/", async (req, res) => {
  res.render("homeland");
});

router.get("/:id", async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    console.log("User ID passed in: " + req.params.id);
    const childData = await Child.findAll({
      include: [
        {
          model: User,
        },
      ],
      // where: { userId: req.params.id },
    });
    console.log("After reading +", childData);
    // Serialize data so the template can read it
    const children = childData.map((child) => child.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render("homepage", {
      children,
      loggedIn: true,
    });
  } catch (err) {
    console.log("Error message", err);
    res.status(500).json(err);
  }
});
module.exports = router;
