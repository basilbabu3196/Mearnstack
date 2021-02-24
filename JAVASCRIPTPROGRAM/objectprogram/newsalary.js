var employee = {
    id: 100,
    ename: "Jhon",
    desig: "developer",
    salary: 20000
}
console.log(employee["salary"]);
employee["salary"] += 2000;
console.log(employee["salary"]);
if ("gender" in employee) {
    console.log("exist");
} else {
    employee["gender"] = "male";
}
console.log(employee);