var sum = (sum1, sum2) => sum1 + sum2;
var cube = (sum1, sum2) => sum1 * sum2;
//map
var arr = [2, 4, 5, 6, 7, 8]
arr.sort((o1, o2) => o1 > o2 ? -1 : 1).forEach(o => console.log(o))
var data = arr.map(num1 => num1 ** 2)
console.log(data);
var data1 = arr.filter(num => num % 2 == 0)
console.log(data1);
var sum = arr.reduce((num1, num2) => num1 + num2)
console.log(sum);