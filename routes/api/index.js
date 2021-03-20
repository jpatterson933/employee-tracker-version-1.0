const router = require('express').Router();

//these variables grab each routes js files
const departmentRoute = require('./departmentRoute');
const roleRoute = require('./roleRoute')

//added our departments route and in the url it will run through /departments
router.use('/departments', departmentRoute);

//add our role route and in the url it will be ran through /roles
router.use('/roles', roleRoute)

module.exports = router;