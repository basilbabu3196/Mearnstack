class person {
    setPerson(name, age, gender) {
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
var obj = new person()
obj.setPerson("Ram", 26, "male")
obj.printPerson()