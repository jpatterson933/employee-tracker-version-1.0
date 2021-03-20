const sequelize = require('../config/connection');
const Department = require('../models/departments');

const departmentSeedData = require('./departmentSeedData.json');

const seedDataBase = async () => {
    await sequelize.sync({ force: true});

    const departments = await Department.bulkCreate(departmentSeedData);

    process.exit(0);
};

seedDataBase();