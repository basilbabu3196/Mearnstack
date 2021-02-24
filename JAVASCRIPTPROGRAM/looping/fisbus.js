var i = 1;
while (i <= 50) {
    if ((i % 3 == 0) & (i % 5 == 0)) {
        console.log("fizz bus", i);
    } else if (i % 3 == 0) {
        console.log("fiss", i);
    } else if (i % 5 == 0) {
        console.log("buzz", i);
    } else { console.log(i); }
    i++;
}