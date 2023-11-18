const router = require('express').Router();
const { User, Trips } = require('../models');
const withAuth = require('../utils/Auth');


//Use withAuth middleware to prevent access to route
router.get('/login', withAuth, async (req, res) => {
  try {
    const dbUserData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Trips }],
    });
    const user = dbUserData.get({ plain: true });
    res.render('profile', {
      ...user,
      loggedIn: true,
    });
  } catch (err) {
    console.log('You need to be logged in to see!', err);
    res.status(500).json(err);
    
  }
});

// If the user is already logged in, redirect the request to another route
  router.get('/', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/profile');
      return;
    }
    res.render('login');
  });
  
  
  module.exports = router;
