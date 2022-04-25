// get the router from express
const router = require('express').Router();
//require the userroutes file
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
// use the routes appending the /users prefix to the routes
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;