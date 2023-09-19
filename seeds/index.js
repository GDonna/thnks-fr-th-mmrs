const sequelize = require('../config/connection');
const seedTrip = require('./TripsData');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedTrip();
  process.exit(0);
};

seedAll();
