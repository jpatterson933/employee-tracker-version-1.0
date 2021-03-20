/*
First, we are going to need to bring in inquirer and my sql
    I am also going to need to bring in the mysql connection

Then we are going to build a function that will allow for the user to input new departments

The department funciton goes as follows
    --they will need to enter a department name
    --Once they create the department, it will get assigned an id that will be used for the roles

    The create a department will be the only thing to show initially,
    once they create a department, they will then be shown create department and create roles
    once they create a role, the main menu will consistnely show create department, role, or add employee
        --it will run the corresponding function based off of user choice
*/

const inquirer = require('inquirer')
const mysql = require('mysql');
const connection = require('../../config/connection');

const addDepartments = () => {
    console.log('testing console log');
    connection.query('select *')
}