const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Department extends Model {}

Department.init(
    {
        department_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        department_name: {
            type: DataTypes.STRING(30),
        },
    },
    {
        sequelize,
        timestamps: false,
        //freeze will infer the table name to be equal to the model name without modifications
        freezeTableName: true,
        underscored: true,
        modelName: 'department',
    }
)

module.exports = Department;