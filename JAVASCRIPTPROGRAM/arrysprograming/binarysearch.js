var arr = [10, 11, 14, 31, 20, 21];
arr.sort((o1, o2) => o1 - o2);
console.log(arr);
let flag = 0;
var x = 20;
for (let number of arr) {
    if (x == number) {
        flag = 1;
        break;
    }
}
if (flag == 0) {
    console.log("element not found");
} else { console.log("element found"); }