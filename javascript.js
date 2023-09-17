// TIME STAMP

let deadline = new Date("Sept 5, 2070 15:37:25")
.getTime();
let x = setInterval(function () {
let now = new Date().getTime();
let t = deadline - now;
let days = Math.floor(t / (1000 * 60 * 60 * 24));
let hours = Math.floor(
(t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor(
(t % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor(
(t % (1000 * 60)) / 1000);
document.getElementById("demo").innerHTML =
days + "days " + hours + "hours " +
minutes + "minutes " + seconds + "seconds ";
if (t < 0) {
clearInterval(x);
document.getElementById("demo")
.innerHTML = "EXPIRED";
}
}, 1000);


