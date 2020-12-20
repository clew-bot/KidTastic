const User = require("./User");
const Child = require("./Child");

User.hasMany(Child, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Child.belongsTo(User, {
  foreignKey: "userId",
});

module.exports = { User, Child };
