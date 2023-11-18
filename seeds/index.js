const { User, Trips } = require('../models');
const sequelize = require('../config/connection');
const TripData = require('./TripsData.json');
const UserData = require('./UserData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(UserData, {
    individualHooks: true,
    returning: true,
  });

  for (const trip of TripData) {
    await Trips.create({
      ...trip,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();


