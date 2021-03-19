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
    department_id INT
);

CREATE TABLE employee (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30),         
    last_name VARCHAR(30),           
    role_id INT,                     
    manager_id INT
);

SELECT * FROM department;
SELECT * FROM emp_role;
SELECT * FROM employee;

INSERT INTO department (id, name)
VALUES (1, "Front of House"), (2, "Back of House"), (3, "Office");

INSERT INTO emp_role (id, title, salary, department_id)
VALUES (1, "Manager", 150000, 1), (2, "Server", 60000, 1);

INSERT INTO emp_role (id, title, salary, department_id)
VALUES (3, "Manager", 120000, 2), (4, "Bartender", 70000, 2);

INSERT INTO emp_role (id, title, salary, department_id)
VALUES (5, "Manager", 250000, 3), (6, "Office Assistant", 40000, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Jay", "Patt", 1, 1), (2, "Pat", "O'Reilee", 2, NULL);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (3, "John", "Peet", 3, 3), (4, "Port", "Silk", 4, NULL);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (5, "Hannah", "Pretty", 5, 5), (6, "Kyle", "Siggity", 6, NULL);