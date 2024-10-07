// Task 1: Create an Employee Class
class Employee{
    constructor(name,salary,position,department){
        this.name= name;
        this.salary= salary;
        this.position= position;
        this.department= department;
    }
    getDetails(){
        return `name${this.name}, position${this.position},salary${this.salary}`
    }
}
// Task 2: Create a Department Class
class Department {
    constructor(name){
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee){
        this.employees.push(employee);
    }
    getDepartmentSalary(){
        return this.employees.reduce((total,manager) => total + manager.salary + manager, 0)
    }
}