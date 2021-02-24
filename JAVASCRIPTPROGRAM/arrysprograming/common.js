var fst = [2, 3, 4, 5, 6];
var second = [1, 5, 7, 9, 11];
var p1 = 0;
var p2 = 0;
while ((fst[p1] < fst.length) & (second[p2] < second.length)) {
    if (fst[p1] == second[p2]) {
        console.log(fst[p1]);
        p1 = p1 + 1;
    } else if (fst[p1] > second[p2]) { p2 = p2 + 1; }
}