const sequelize = require('../config/connection');
const Department = require('../models/departments');

const departmentSeedData = require('./departmentSeedData.json');

const seedDataBase = async () => {
    await sequelize.sync({ force: true});

    await Department.bulkCreate(departmentSeedData);
    console.log("Your department seeds have been planted!")

    process.exit(0);
};

seedDataBase();