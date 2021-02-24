//function that clear the display 
function clr() {
    document.getElementById("result").value = ""
}

function dis(val) {
    document.getElementById("result").value += val;
}

function evl() {
    let a = document.getElementById("result").value;
    let b = eval(a);
    document.getElementById("result").value = b;
}

function back() {
    let a = document.getElementById("result").value;
    let b = a.slice(0, -1)
    document.getElementById("result").value = b;
}