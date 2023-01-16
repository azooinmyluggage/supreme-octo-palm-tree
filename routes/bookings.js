const express = require('express');
const router = express.Router();
const bookingsController = require('../controllers/bookings.controller');

/* GET bookings. */
router.get('/', bookingsController.get);
  
/* POST bookings */
router.post('/', bookingsController.create);

/* PUT bookings */
router.put('/:id', bookingsController.update);

/* DELETE bookings */
router.delete('/:id', bookingsController.remove);

module.exports = router;