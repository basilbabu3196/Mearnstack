class Parent {
    phone() {
        console.log("nokia phone");
    }
}
class Child extends Parent {
    phone() {
        super.phone()
        console.log("i phone");
    }
}
var obj = new Child;
obj.phone()