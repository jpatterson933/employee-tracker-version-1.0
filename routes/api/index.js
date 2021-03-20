const router = require('express').Router();

const departmentRoute = require('./departmentRoute');

router.use('/departments', departmentRoute);

module.exports = router;