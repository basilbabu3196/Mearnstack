try {
    let data = eval("10+20+?")
    console.log(data);
} catch (error) {
    console.log(error.message);
}
console.log("have one db operation");
console.log("fill operation");