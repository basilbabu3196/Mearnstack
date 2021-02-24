var number = 7;
flag = 0;
for (let i = 2; i <= number; i++) {
    if (i % 1 !== 0) {
        flag = 1;
        break;
    }
    if (flag == 1) {
        console.log(i, "not prime");
    } else {
        console.log(i, "prime");
    }
}