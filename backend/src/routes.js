const express = require("express");
const multer = require("multer"); //upload das fotos
const uploadConfig = require('./config/upload')
const SessionController = require('./controlers/SessionController')
const SpotController = require('./controlers/SpotController')
const ProfileController = require('./controlers/ProfileController')
const BookingController = require('./controlers/BookingController')

const routes = express.Router();
const upload = multer(uploadConfig)

routes.post('/sessions', SessionController.store);


routes.get('/spots',SpotController.index);
routes.post('/spots',upload.single('thumbnail') ,SpotController.store);

routes.get('/profile',ProfileController.show);

routes.post('/spots/:spot_id/bookings',BookingController.store)

module.exports = routes;