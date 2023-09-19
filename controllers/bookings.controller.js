const bookings = require('../services/bookings.service');

async function get(req, res, next) {
  try {
      res.json(await bookings.getMultiple());
  } catch (err) {
      console.error(`Error while getting bookings`, err.message);
      next(err);
  }
}

async function create(req, res, next) {
  try {
    res.json(await bookings.create(req.body));
  } catch (err) {
    console.error(`Error while creating booking`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.json(await bookings.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating a booking`, err.message);
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    res.json(await bookings.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting a booking`, err.message);
    next(err);
  }
}

module.exports = {
  get,
  create,
  update,
  remove
};