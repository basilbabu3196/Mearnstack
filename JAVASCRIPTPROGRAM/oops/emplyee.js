class Employee {
    constructor(id, name, desig, sal) {
        this.id = id;
        this.name = name;
        this.desig = desig;
        this.sal = sal;
    }
}
var obj = new Employee(100, "AJAY", "Devel", 20000);
var obj1 = new Employee(101, "VJAY", "Devel", 25000);
var obj2 = new Employee(102, "JAYAN", "QS", 30000);
var obj3 = new Employee(103, "SJAY", "OS", 24000);
var employee = []
employee.push(obj)
employee.push(obj1)
employee.push(obj2)
employee.push(obj3)
for (let emp of employee) {
    if (emp.desig == "Devel") {
        console.log(emp);
    }
}
enames = employee.map(emp => emp.name.toUpperCase())
console.log(enames);



employee.filter(emp => emp.desig == "Devep").forEach(o => console.log(o.name))
ename = employee.map(emp => emp.sal).reduce((emp1, emp2) => emp1 > emp2 ? emp1 : emp2)
console.log(ename);

employee.sort((emp1, emp2) => emp1.sal > emp2.sal ? -1 : 1).forEach(emp => console.log(emp))