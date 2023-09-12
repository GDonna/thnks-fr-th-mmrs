const User = require('./User');
const Trips = require('./Trips');

Users.hasMany(Trips, {
  foreignKey: 'trips_id',
});

Trips.belongsTo(User, {
  foreignKey: 'trips_id',
});

module.exports = { User, Trips};
