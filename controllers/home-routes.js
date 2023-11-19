const router = require('express').Router();
const { User, Trips } = require('../models');
const withAuth = require('../utils/Auth');

// If the user is already logged in, redirect the request to another route
router.get('/', withAuth, (req, res) => {
  res.redirect('/profile');
});

// If the user is already logged in, redirect the request to another route
router.get('/profile', withAuth, (req, res) => {
  res.render('profile', {loggedIn: true});
});

//Use withAuth middleware to prevent access to route
router.get('/login', async (req, res) => {
  // clear the logged in/out state
  delete req.session.user_id;
  req.session.logged_in = false;
  // show login page
  res.render('login');
});
  
  
  module.exports = router;
