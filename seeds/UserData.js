const { User } = require('../models');

const UserData = [
    {
      "firstname": "Test",
      "lastname": "Test",
      "email": "test@test.com",
      "password": "password12345"
    },
    {
        "firstname": "Test1",
        "lastname": "Test1",
        "email": "test1@test.com",
        "password": "password12345"
      },

  ]
  const seedUser = () => User.bulkCreate(UserData);

module.exports = seedUser;
