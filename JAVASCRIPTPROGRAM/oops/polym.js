class Maths {
    add(num) {
        console.log("inside single");
    }
    add(num1, num2) {
        console.log("inside two mth");
    }
    add(num1, num2, num3) {
        console.log("inside three mth");
    }
}
var math = new Maths();
math.add(10, 20, 30)
math.add(10, 20)
math.add(30)