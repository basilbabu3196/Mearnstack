var num1 = 10;
//vote
if (num1 > 18)
    console.log("u can vote");
else
    console.log("u cannot vote");
// Positive
var num3 = 7;
if (num3 > 0)
    console.log("Positive +");
else
    console.log("Negative -");
//odd or even number
if (num3 % 2 == 0)
    console.log("EVEN");
else
    console.log("ODD");
//largest of 2 number
if (num1 > num3)
    console.log("num1 Greater");
else
    console.log("num3 Greater");
//postivenegative of 3 numbers
if (num3 > 0)
    console.log("Positive +");
else if (num3 < 0)
    console.log("Negative -");
else console.log("O");
//largest smaallest 3 numbers

var num2 = 4;
// check the condition
if (num1 >= num2 && num1 >= num3) {
    largest = num1;
} else
if (num2 >= num1 && num2 >= num3) {
    largest = num2;
} else {
    largest = num3;
}

// display the result
console.log("The largest number is " + largest);