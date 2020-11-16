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

let getEmployee = async(id) => {

    let employeeDB = employees.find(employee => employee.id === id);

    if (!employeeDB) {
        throw new Error(`Do not exist an employee with the id ${id}`);
    } else {
        return employeeDB;
    }
};

let getSalary = async(employee) => {


    let salaryDB = salaries.find(salary => salary.id === employee.id);

    if (!salaryDB) {
        throw new Error(`There are not salary for the user ${employee.name}`);
    } else {
        return {
            name: employee.name,
            salary: salaryDB.salary,
            id: employee.id
        };
    }
};

let getInformation = async(id) => {
    let employee = await getEmployee(id);
    let resp = await getSalary(employee);
    return `${resp.name} has a salary of ${resp.salary}`
}

getInformation(1).then(message => console.log(message))
    .catch(err => console.log(err));