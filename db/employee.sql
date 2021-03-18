/*
employee            --this is the name of the table
id INT PRIMARY KEY  --id associated with each employee
first_name VARCHAR(30)          --this will hold the employees first name
last_name VARCHAR(30)           --this will hold the employees last name
role_id INT                     --this will hold the reference to the role the employee has
manager_id INT                  --this will hold the reference to another employee that manages the employee being created
                                    --manager_id may be null if the employee has no manager
*/