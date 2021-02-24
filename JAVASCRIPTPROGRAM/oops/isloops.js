isl = [
    { team: "atk", played: 17, won: 11, draw: 3, los: 3, pts: 36 },
    { team: "mumbai", played: 17, won: 10, draw: 4, los: 3, pts: 34 },
    { team: "hyderabad", played: 18, won: 6, draw: 9, los: 3, pts: 27 },
    { team: "goa", played: 18, won: 6, draw: 9, los: 3, pts: 27 },
    { team: "northeast", played: 18, won: 6, draw: 9, los: 3, pts: 27 },
    { team: "benguluru", played: 18, won: 5, draw: 7, los: 6, pts: 22 },
    { team: "jamshed", played: 18, won: 5, draw: 6, los: 7, pts: 21 },
]
upr = isl.map(sl => sl.team.toUpperCase())
console.log(upr);
isl.filter(tm => tm.team).forEach(o => console.log(o.team))
isl.sort((tm1, tm2) => tm1.played > tm2.played ? -1 : 1).forEach(tm => console.log(tm))

var tdetails = isl.reduce((t1, t2) => t1.pts > t2.pts ? t1 : t2)
console.log(tdetails)
for (let num of isl) {
    if (isl.pts > 32) {}
}