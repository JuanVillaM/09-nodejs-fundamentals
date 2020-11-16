let employees = [{
        id: 1,
        name: 'Juan'
    },
    {
        id: 2,
        name: 'Ana'
    },
    {
        id: 3,
        name: 'Guillermo'
    }
];

let salaries = [{
        id: 1,
        salary: 1000
    },
    {
        id: 2,
        salary: 2000
    }
];

let getEmployee = (id, callback) => {

    let employeeDB = employees.find(employee => employee.id === id);

    if (!employeeDB) {
        callback(`Do not exist an employee with the id ${id}`);
    } else {
        callback(null, employeeDB);
    }

};

let getSalary = (employee, callback) => {

    let salaryDB = salaries.find(salary => salary.id === employee.id);

    if (!salaryDB) {
        callback(`There are not salary for the user ${employee.name}`);
    } else {
        callback(null, {
            name: employee.name,
            salary: salaryDB.salary
        });
    }

};

getEmployee(1, (err, employee) => {
    if (err) {
        return console.log(err);
    }

    getSalary(employee, (err, resp) => {
        if (err) {
            return console.log(err);
        }
        console.log(`The salary of ${resp.name} is ${resp.salary}$`);
    });
});