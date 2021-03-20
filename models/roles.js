//importing data types allows for us to the the built in data types in sequelize
const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Role extends Model {}
//establish basic connection here -- before ad
Role.init(
    {
        title: {
            type: DataTypes.STRING,
        },
        salary: {
            type: DataTypes.DECIMAL(10,2),
        },
        department_id: {
            type: DataTypes.INTEGER,
        }
    },
    {
        sequelize,
        timestamps: false,
        //freeze will infer the table name to be equal to the model name without modifications
        freezeTableName: true,
        underscored: true,
        modelName: 'roles',
    }
)

module.exports = Role;