const router = require("express").Router();
const { Child, User } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newChild = await Child.create({
      ...req.body,
      userId: req.session.userId,
    });

    const childUserData = await User.create({
      ...req.body,
      isChild: true,
    });
    console.log(req.session);
    console.log(childUserData);
    res.status(200).json(newChild);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const childData = await Child.destroy({
      where: {
        id: req.params.id,
        userId: req.session.userId,
      },
    });

    if (!childData) {
      res.status(404).json({ message: "No Child found with this id!" });
      return;
    }

    res.status(200).json(childData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
