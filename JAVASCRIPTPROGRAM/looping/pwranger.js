var n = 10;
var llim = 0;
var ulim = 25;
let s = 0;
for (var i = 1; i <= n; i++) {
    s = i ** n;
    if ((s > llim) && (s < ulim)) {
        console.log(i);
    }
}