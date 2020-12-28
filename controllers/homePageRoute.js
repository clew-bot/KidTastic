const router = require("express").Router();


router.get("/", async (req, res) => {
  res.render("homeland");
});

router.get("/signUp", async (req, res) => {
  res.render("signup");
});

router.get("/login", async (req, res) => {
  res.render("login");
});



router.get("/:id", async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const childData = await Child.findAll({
      include: [
        {
          model: User,
          attributes: ["firstname"],
        },
      ],
      where: { userId: req.params.id },
    });

    // Serialize data so the template can read it
    const children = childData.map((child) => child.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render("homepage", {
      children,
      loggedIn: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
