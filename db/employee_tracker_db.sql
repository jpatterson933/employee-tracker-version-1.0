/*TIME FOR SOME PSOODOCODE!?!?!?

We will create one database for each of the three tables.

department              --this is the name of the table
id INT PRIMARY KEY      --this will be the id associated with each department
name VARCHAR(30)        --this will be the departments name

role        --this is the title of the table
id INT PRIMARY KEY      --the id associated with each object
title VARCHAR(30)       --this will hold the role title
salary DECIMAL          --this will hold our salary
department_id INT       --this will hold the reference to the department the role belongs to

employee            --this is the name of the table
id INT PRIMARY KEY  --id associated with each employee
first_name VARCHAR(30)          --this will hold the employees first name
last_name VARCHAR(30)           --this will hold the employees last name
role_id INT                     --this will hold the reference to the role the employee has
manager_id INT                  --this will hold the reference to another employee that manages the employee being created
                                    --manager_id may be null if the employee has no manager
*/