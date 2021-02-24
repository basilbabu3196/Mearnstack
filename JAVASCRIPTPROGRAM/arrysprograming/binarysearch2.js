var arr = [1, 3, 4, 5, 7, 6];
arr.sort((o1, o2) => o1 - o2);
console.log(arr);

var x = 4;
var low = 0,
    upp = arr.length - 1;
var flag = 0;
while (low < upp) {
    let mid = Math.floor((low + upp) / 2);
    if (x > arr[mid]) {
        low = mid + 1;
    } else if (x < arr[mid]) {
        upp = mid - 1;
    } else if (x == arr[mid]) {
        flag += 1;
        break
    }
}
if (flag == 0) {
    console.log("element not found");
} else {
    console.log("element found");
}