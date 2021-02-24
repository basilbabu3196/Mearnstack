class Student {
    static college = "luminar"
    constructor(rol, name, course) {
        this.rol = rol;
        this.name = name;
        this.course = course;
    }
    PrintStudent() {
        console.log(this.rol + "," + this.course + "," + this.name + "," + Student.college)
    }
}
var std = new Student(100, "Ram", "BCA")
std.PrintStudent()

var std1 = new Student(101, "Ramu", "BCA")
std1.PrintStudent()