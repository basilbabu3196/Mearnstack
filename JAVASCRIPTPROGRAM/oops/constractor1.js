class person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    printPerson() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.gender);
    }
}
var obj = new person("Ram", 26, "male")

obj.printPerson()