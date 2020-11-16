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

let getEmployee = (id) => {

    return new Promise((resolve, reject) => {
        let employeeDB = employees.find(employee => employee.id === id);

        if (!employeeDB) {
            reject(`Do not exist an employee with the id ${id}`);
        } else {
            resolve(employeeDB);
        }


    });
};

let getSalary = (employee) => {

    return new Promise((resolve, reject) => {

        let salaryDB = salaries.find(salary => salary.id === employee.id);

        if (!salaryDB) {
            reject(`There are not salary for the user ${employee.name}`);

        } else {
            resolve({
                name: employee.name,
                salary: salaryDB.salary,
                id: employee.id

            });

        }

    });

};


getEmployee(3).then(employee => {
    return getSalary(employee);

}).then(resp => {
    console.log(`The salary of ${resp.name} is ${resp.salary}$`);

}).catch(err => {
    console.log(err);
});