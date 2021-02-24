let arr = [4, 5, 6];
total = 0;
for (let num of arr) {
    total += num
}
var res = [];
for (let num of arr) {
    res.push(total - num)
}
console.log(res);