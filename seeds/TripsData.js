const { Trips } = require('../models');

const TripsData = [
  {
    city: 'St Louis',
    state: 'MO',
    best_memories: 'I went up the arch.',
    worst_memories: 'I am afraid of heights.',
    best_restaurant: "Pappy's Smokehouse BBQ",
  },
  {
    city: 'Chicago',
    state: 'IL',
    best_memories: 'I went to all the museums and went shopping down Michigan Ave.',
    worst_memories: 'I spend a lot of money',
    best_restaurant: 'Ricobenes',
  },
  {
    city: 'Las Vegas',
    state: 'NV',
    best_memories: 'I went down the strip and went around every casino',
    worst_memories: 'I lost money at the slots',
    best_restaurant: 'Bacchanal Buffet',
  },
];

const seedTrip = () => Trips.bulkCreate(TripsData);

module.exports = seedTrip;
