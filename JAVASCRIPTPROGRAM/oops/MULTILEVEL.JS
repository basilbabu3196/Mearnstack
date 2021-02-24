class Parent {
    bike() {
        console.log("have passion pro");
    }
}
class Child extends Parent {
    bike1() {
        console.log("have passion");
    }
}
class Subchild extends Child {
    bike2() {
        console.log("have  pro");
    }
}
var ch = new Child;
ch.bike1();
var sh = new Subchild;
sh.bike2();