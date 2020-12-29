const sequelize = require("../config/connection");
const { User, Child } = require("../models");

const userData = require("./userData.json");
const childData = require("./childData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  for (let i = 0; i < userData.length; i++) {
    await User.create(userData[i]);
    await Child.bulkCreate([childData[i * 2], childData[i * 2 + 1]]);
  }

  process.exit(0);
};

seedDatabase();
