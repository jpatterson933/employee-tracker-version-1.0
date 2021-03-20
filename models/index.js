const sequelize = require('../config/connection');
const Department = require('./departments')
const Role = require('./roles')
const Employee = require('./employees')

Department.hasMany(Role, {
    foreignkey: 'department_id',
    onDelete: 'CASCADE'
})

Role.belongsTo(Department, {
    foreignKey: 'department_id',
})


module.exports = { Department, Role, Employee }