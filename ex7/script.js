// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp

var header = document.getElementById("section-header");
var main = document.getElementById("accordion")
var test = document.getElementById('section')

header.addEventListener('click', function () {
    if (test.style.display === "none") {
        test.style.display = "block";
    } else {
        test.style.display = "none";
    }
})

