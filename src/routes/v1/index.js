const express =  require('express');

const { FlightMiddlewares } = require('../../middlewares/index');
const CityController = require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-controller');
const AirportController = require('../../controllers/airport-controller');

const router = express.Router();

router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll); 
router.patch('/city/:id', CityController.update);

router.get('/flights',FlightController.getAll);
router.post('/flights', FlightMiddlewares.validateCreateFlight, FlightController.create);

router.post('/airports', AirportController.create);
router.get('/flights/:id', FlightController.get);
router.patch('/flights/:id', FlightController.update);
module.exports = router;