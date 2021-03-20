const sequelize = require('../config/connection');
const Department = require('../models/departments');
const Employee = require('../models/employees');
const Role = require('../models/roles')

const departmentSeedData = require('./departmentSeedData.json');
const roleSeedData = require('./roleSeedData.json')
const employeeSeedData = require('./employeeSeedData.json')

const seedDataBase = async () => {
    await sequelize.sync({ force: true});

    await Department.bulkCreate(departmentSeedData);
  
    await Employee.bulkCreate(employeeSeedData);
    
    await Role.bulkCreate(roleSeedData);

    console.log("Your department seeds have been planted!")

    process.exit(0);
};

seedDataBase();