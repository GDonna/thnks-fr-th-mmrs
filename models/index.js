const User = require('./User');
const Trips = require('./Trips');

User.hasMany(Trips, {
  foreignKey: 'trips_id',
});

Trips.belongsTo(User, {
  foreignKey: 'trips_id',
});

module.exports = { User, Trips};
