const { User, Trips } = require('../models');
const sequelize = require('../config/connection');
const seedTrip = require('./TripsData.json');
const userData = require('./UserData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const trip of seedTrip) {
    await Trips.create({
      ...trip,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();


