const { Trips } = require('../models');

const TripsData = [
  {
    city: 'St Louis',
    state: 'MO',
    Best_Memories: 'I went up the arch.',
    Worst_Memories: 'I am afraid of heights.',
    Best_Restaurant: "Pappy's Smokehouse BBQ",
  },
  {
    city: 'Chicago',
    state: 'IL',
    Best_Memories: 'I went to all the museums and went shopping down Michigan Ave.',
    Worst_Memories: 'I spend a lot of money',
    Best_Restaurant: 'Ricobenes',
  },
  {
    city: 'Las Vegas',
    state: 'NV',
    Best_Memories: 'I went down the strip and went around every casino',
    Worst_Memories: 'I lost money at the slots',
    Best_Restaurant: 'Bacchanal Buffet',
  },
];

const seedTrip = () => Trips.bulkCreate(TripsData);

module.exports = seedTrip;
