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
