//this is the home file to start the api routes
//require the express router
const router = require('express').Router();
// require the api files by targeting the folder
const apiRoutes = require('./api');
// prefixes the routes that have been gathered from the apiroutes
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;