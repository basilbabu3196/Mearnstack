var eprt = [20000,
    30000, 32000, 33000, 38000, 43000
];
var exp = {
    jan: 20000,
    feb: 30000,
    mar: 32000,
    apr: 33000,
    may: 38000,
    jun: 43000
}
exp["feb"] += 1000;
console.log(exp["feb"]);