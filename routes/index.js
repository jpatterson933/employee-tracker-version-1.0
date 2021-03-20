const router = require('express').Router();


//grabs our api folder
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

module.exports = router;