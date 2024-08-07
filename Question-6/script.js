var home = document.querySelector("#home");
var about = document.querySelector("#about");
var contect = document.querySelector("#contect");

var hometext = document.querySelector("#hometext");
var abouttext = document.querySelector("#abouttext");
var contecttext = document.querySelector("#contecttext");

hometext.style.display = "block";
hometext.style.width = "50%";

home.addEventListener("click", function () {
  allremoove();
  hometext.style.display = "block";
  hometext.style.width = "100%";
});

about.addEventListener("click", function () {
  allremoove();
  abouttext.style.display = "block";
  abouttext.style.width = "100%";
});

contect.addEventListener("click", function () {
  allremoove();
  contecttext.style.display = "block";
  contecttext.style.width = "100%";
});
function allremoove() {
  document.querySelectorAll("h3").forEach(function (h3) {
    h3.style.display = "none";
  });
}
