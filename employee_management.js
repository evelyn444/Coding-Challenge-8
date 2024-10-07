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
//Task 3: Create a Manager Class that Inherits from Employee (added this after task 1 because was easier to understand)
class Manager extends Employee {
    constructor(name,salary,position,department,bonus){
        super(name,salary,position,department,bonus);
        this.bonus=bonus;
    }
    getDetails(){
        return `name${this.name}, position${this.position}, salary${this.salary}, bonus${this.bonus}`
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
        return this.employees.reduce((total,employee) => total + employee.salary, 0);
    }


//Task 4: Handle Bonuses for Managers
calculateTotalSalaryWithBonus(){
    return this.employees.reduce ((total, manager) => total + manager.salary + manager, 0) 
        
}
}


//Task 5: Create and Manage Departments and Employees
//Departments
const engineering = new Department("Engineering");
const marketing = new Department("Marketing");
//employees
const alice = new Employee("Alice",80000,"Developer", "Engineering");
const bob = new Employee("Bob", 75000, "Designer", "Marketing");
const charlie = new Manager("Charlie", 120000, "Engineering Manager", "Engineering", 20000);
const diana = new Manager("Diana", 130000, "Marketing Manager", "Marketing", 25000);
// Add employees to departments
engineering.addEmployee(alice);
engineering.addEmployee(charlie);
marketing.addEmployee(bob);
marketing.addEmployee(diana);
//calculate total salary for each department
console.log(`Total salary for Engineering: $${engineering.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Engineering: $${engineering.calculateTotalSalaryWithBonus()}`);
console.log(`Total salary for Marketing: $${marketing.getDepartmentSalary()}`);
console.log(`Total salary with bonuses for Marketing: $${marketing.calculateTotalSalaryWithBonus()}`);
