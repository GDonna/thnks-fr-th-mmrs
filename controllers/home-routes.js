const router = require('express').Router();
const { User, Trips } = require('../models');
const withAuth = require('../utils/Auth');

// GET all Trip Data for homepage
router.get('/', withAuth, async (req, res) => {
  try {
    const dbTripsData = await User.findAll(
      {
      include: [
        {
          model: Trips,
          attributes: ['city', 'state', 'Best_Memories', 'Worst_Memories', 'Best_Restaurants'],
        },
      ],
    }
    );

    const trips = dbTripsData.map((xyz) =>
      xyz.get({ plain: true })
    );
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
