const sequelize = require('../config/connection');
const { Department } = require('../models');

const departmentSeedData = require('./departmentSeedData.json');

const seedDataBase = async () => {
    await sequelize
}