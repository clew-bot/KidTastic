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

  // users.forEach(async (user) => {
  //   await User.create(user);
  // });

  // for (const children of childData) {
  //   await Child.create({
  //     ...children,
  //     userId: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }

  for (let i = 0; i < userData.length; i++) {
    await User.create(userData[i]);
    await Child.bulkCreate([childData[i * 2], childData[i * 2 + 1]]);
  }

  process.exit(0);
};

seedDatabase();
