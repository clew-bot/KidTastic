const sequelize = require("../config/connection");
const { User, Child } = require("../models");

const userData = require("./userData.json");
const childData = require("./childData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // const users = await User.bulkCreate(userData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  userData.forEach(async (user) => {
    await User.create(user);
  });

  for (const children of childData) {
    await Child.create(children);
    // await Child.create({
    //   ...children,
    //   userId: users[Math.floor(Math.random() * users.length)].id,
    // });
  }

  process.exit(0);
};

seedDatabase();
