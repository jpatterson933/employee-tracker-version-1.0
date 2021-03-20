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

//our function to add departments
const createDept = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "New department name:",
            name: "department",
            validate: checkInput => {
                if (checkInput) {
                    return true;
                } else {
                    console.log("Please enter a valid department name")
                    return false;
                }
            }
        },
    ]).then(deptName => {
        const newDept = `INSERT INTO department (department_name) VALUES ('${deptName.department}')`;
        connection.query(newDept, (err) => {
            if (err) throw err;
            console.log("this worked")
        })
        mainMenu();
    })
}

const mainMenu = () => {
    console.log('Main Menu');
    inquirer.prompt([
        {
            type: 'list',
            message: 'Main Menu',
            name: 'menu',
            choices: ['Departments', 'Employee Roles', 'Employees']
        }
    ]).then(menuChoice => {
        switch (menuChoice.menu) {
            case 'Departments':
                console.log("department switch")
                departmentMenu();
            break;
            case 'Employee Roles':
                console.log("new role")
            break;
            case 'Employees':
                console.log('new employee')
            break;
        }
            
    })

}

const departmentMenu = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Department Menu',
            name: 'deptMenu',
            choices: ['View Departments', 'Create New Department', 'Delete Department']
        }
    ]).then(deptMenuChoice => {
        switch (deptMenuChoice.deptMenu) {
            case 'View Departments':
                //need to create a new departments and add an exit function to that funciton
                console.log("list of deparmtnets")
            break;
            case 'Create New Department':
                createDept();
            break;
            case 'Delete Department':
                //need to createa delete department function
                console.log('delete departments')
            break;
        }
    })
}
module.exports = createDept
