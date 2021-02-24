var employee = [{ id: 100, ename: "ram", desig: "developer", join: 1989, resign: 2005 },
    { id: 101, ename: "raju", desig: "developer", join: 1989, resign: 2005 },
    { id: 102, ename: "ravi", desig: "hr", join: 1991, resign: 2000 },
    { id: 103, ename: "amit", desig: "mrkt", join: 1995, resign: 2005 }
];
for (emp of employee) {
    if (emp["desig"] == "developer") {
        console.log(emp);
    }
}
for (emp of employee) {
    if ((emp["join"] > 1989) & (emp["resign"] < 2005)) {
        console.log(emp);
    }
}
for (emp of employee) {

    if ((emp["resign"]) - (emp["join"] >= 10)) {
        console.log(emp);
    }
}