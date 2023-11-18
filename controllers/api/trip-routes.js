const router = require('express').Router();
const { Trips } = require('../../models');
const withAuth = require('../../utils/Auth');

router.post('/', withAuth, async (req, res) => {
    try {
      const newTripPost = await Trips.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newTripPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });

//Get all trips for homepage
router.get('/', withAuth, async (req, res) => {
    try {
      const dbTripsData = await Trips.findAll(
        {
          include: [
            {
              model: User,
              attributes: ['firstname', 'lastname'],
            },
          ],
        }
        );
        // Serialize data so the template can read it
        const trips = dbTripsData.map((xyz) => xyz.get({ plain: true }));
        // Pass serialized data and session flag into template
        res.render('homepage', {
          trips,
          loggedIn: req.session.loggedIn,
        });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });
    
  // Delete a trip (NOT USING)

    // router.delete('/:id', withAuth, async (req, res) => {
    //     try {
    //     const tripData = await Trips.destroy({
    //         where: {
    //         id: req.params.id,
    //         user_id: req.session.user_id,
    //         },
    //     });
    
    //     if (!tripData) {
    //         res.status(404).json({ message: 'No trip found with this id!' });
    //         return;
    //     }
    
    //     res.status(200).json(tripData);
    //     } catch (err) {
    //     res.status(500).json(err);
    //     }
    // });

module.exports = router;