var age = 17;
try {
    if (age < 18) throw new Error("invalid age")
} catch (er) {
    console.log(er.message);
}