const User = require('./User');
const Trips = require('./Trips');

Trips.hasMany(location, {
  foreignKey: 'trips_id',
});

location.belongsTo(User, {
  foreignKey: 'trips_id',
});

module.exports = { User, Trips};
