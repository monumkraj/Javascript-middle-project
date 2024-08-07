//This is a selector part
var add = document.querySelector("#add");
var remove = document.querySelector("#remove");
var inp = document.querySelector("#text");
var ul = document.querySelector("ul");
//This is a veriable
var li;
//Click buutton listner part
add.addEventListener("click", function () {
  if (inp.value.trim() === "") {
  } else {
    li = document.createElement("li");
    li.textContent = inp.value;
    ul.appendChild(li);
    inp.value = "";
  }
});

remove.addEventListener("click", function () {
  ul.removeChild(li);
});
