const PI = 3.1416;

let radius;
let circumference;

document.getElementById("submitButton").onclick = function () {

    radius = document.getElementById("myText").value;

    radius = Number(radius);

    circumference = 2 * PI * radius;

    document.getElementById("myH3").textContent = circumference;
};