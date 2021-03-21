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
const { Department, Role, Employee } = require('../../models')



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

//create our department menue here
const departmentMenu = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Department Menu',
            name: 'deptMenu',
            choices: ['View Departments', 'Create New Department', 'Delete Department', 'Exit']
        }
    ]).then(deptMenuChoice => {
        switch (deptMenuChoice.deptMenu) {
            case 'View Departments':

                console.log("These are your departments")
                viewAllDept();
            break;
            case 'Create New Department':
                createDept();
            break;
            case 'Delete Department':
                //need to createa delete department function
                console.log('delete departments')
            break;
            case 'Exit':
                mainMenu();
            break;
        }
    })
}

const viewAllDept = () => {
    connection.query('SELECT * FROM department', (err, res, fields) => {
      if (err) throw err;
      console.log(res[0]);
      console.log('this did not work')
    });
  };
  

//our function to add departments
const createDept = () => {
    console.log('creating new department...\n')
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
        connection.query(newDept,
            {
                department_name: `${deptName.department}`
            },
            
            (err, res) => {
            if (err) throw err;
            console.log(`${res.affectedRows} product inserted \n`)
        })
        //calls main menu after department has been inserted
        mainMenu();
    })
}

const deleteDept = () => {


}
module.exports = mainMenu
