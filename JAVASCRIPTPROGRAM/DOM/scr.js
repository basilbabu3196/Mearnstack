var clk = document.querySelector("#click");
clk.addEventListener("click", () => {
    clk.style.color = "red";
    clk.textContent = "clicked"
})
var dbclk = document.querySelector("#dbl");
dbclk.addEventListener("dblclick", () => {
    dbclk.style.color = "green";
    dbclk.textContent = "double clicked"


})
var hvr = document.querySelector("#over");
hvr.addEventListener("mouseover", () => {
    hvr.style.color = "blue";
    hvr.textContent = "overed"


})
var hvrb = document.querySelector("#over");
hvrb.addEventListener("mouseout", () => {
    hvrb.style.color = "black";
    hvrb.textContent = "over"


})