DROP DATABASE IF EXISTS employee_DB;
CREATE database employee_DB;

USE employee_DB;

CREATE TABLE department (
    id INT PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE emp_role (
    id INT PRIMARY KEY,      
    title VARCHAR(30),       
    salary DECIMAL,          
    department_id INT, 
);

CREATE TABLE employee (
    id INT PRIMARY KEY        
    first_name VARCHAR(30)    
    last_name VARCHAR(30)     
    role_id INT                
    manager_id INT 
);


