arr = [1, 2, 3, 4, 5, 6]
var low = 0;
var high = arr.length - 1;
var num = 6;
while (low < high) {
    let total = arr[low] + arr[high];
    if (total == num) {
        console.log(arr[low], arr[high]);
        low += 1;
    } else if (total < num) {
        low += 1;
    } else {
        high -= 1;
    }
}