//this is going to be our add employee js
//time for some SOOOO DOOOO COOOOOOOODE

/*
First, we are going to need to bring in inquirer and my sql
    I am also going to need to bring in the mysql connection

Then we are going to build a function to allow us to add an employee

In that function, we are going to need to prompt the user for the following information
    --employee first name
    --employee last name
    --employee role
        --when they choose an employee role (manager, server, bartender) 
            --THEN it will automatically assign an id number to that role which will be plugged into the database
        --if they choose manager
            --then it will assign them a manager id 
    
    --once the user creates an employee, it will ask them if they would like to create another employee
        --if they choose yes, it will rerun the funciton
        --if they choose no, it will take them back to the main menu 
            --the main menu will display create a department, create a role, add new employee
                --the main menue will only display those three options AFTER they have created their first employee

*/