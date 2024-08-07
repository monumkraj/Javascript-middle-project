var h1 = document.querySelector("h1");
var input = document.querySelector("input");
var data = document.querySelectorAll("data");
var data = [
  {
    name: "Ankit",
    src: "https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Raushan",
    src: "https://images.pexels.com/photos/1468380/pexels-photo-1468380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Ankita",
    src: "https://images.pexels.com/photos/2735434/pexels-photo-2735434.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    name: "Ansika",
    src: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Suhani",
    src: "https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Anjani",
    src: "https://images.pexels.com/photos/1468380/pexels-photo-1468380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Manisha",
    src: "https://images.pexels.com/photos/2735434/pexels-photo-2735434.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    name: "Anish",
    src: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Binita",
    src: "https://images.pexels.com/photos/3598251/pexels-photo-3598251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Hansika",
    src: "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

var img = "";
data.forEach(function (elem) {
  img += `
    <div id="img">
      <img src="${elem.src}" alt=""/>
      <h3>${elem.name}</h3>
    </div>`;
});
document.querySelector(".people").innerHTML = img;

input.addEventListener("input", function () {
  var matching = data.filter(function (e) {
    return e.name.startsWith(input.value);
  });
  var newusers = "";
  matching.forEach(function (elem) {
    newusers += `
      <div id="img">
        <img src="${elem.src}" alt=""/>
        <h3>${elem.name}</h3>
      </div>`;
  });
  document.querySelector(".people").innerHTML = newusers;
});
