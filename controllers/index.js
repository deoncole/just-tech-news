//this is the home file to start the api routes
//require the express router
const router = require('express').Router();
// require the api files by targeting the folder
const apiRoutes = require('./api');
// require the route to the home page
const homeRoutes = require('./home-routes.js');
// prefixes the routes that have been gathered from the apiroutes
router.use('/api', apiRoutes);
// prefix for the homepate route
router.use('/', homeRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;