const router = require('express').Router();
const { User, Trips } = require('../models');
const withAuth = require('../utils/Auth');

// GET all Trip Data for homepage
router.get('/', async (req, res) => {
  try {
    const dbTripsData = await Trips.findAll(
      {
      include: [
        {
          model: User,
          attributes: ['firstname'],
        },
      ],
    }
    );

    const trips = dbTripsData.map((xyz) => xyz.get({ plain: true }));
    res.render('homepage', {
      trips,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
