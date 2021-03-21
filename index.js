//this will be our main java file where verything will be combined

const inquirer = require('inquirer');
const connection = require('./config/connection');
const mainMenu = require('./assets/js/add-department');
const { Department, Role, Employee } = require('./models')

const startTrackingEmployees = () => {
    
}

mainMenu()