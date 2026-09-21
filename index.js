let button = document.getElementById("colorChangeBtn");
let changePara = document.getElementById("welcome");

button.addEventListener("click", () => {
  changePara.style.backgroundColor = "red";
});

document.getElementById("changeText").addEventListener("click", () => {
  document.getElementById("drag").children[0].textContent = "My First Child";
});

document.getElementById("highlight").addEventListener("click", function () {
  this.classList.add("hlt");
});

document.getElementById("addText").addEventListener("click", () => {
  let paraElement = document.createElement("p");
  paraElement.textContent = "Hello Vansh";
  document.getElementById("drag").appendChild(paraElement);
});

document.getElementById("rmLast").addEventListener("click", () => {
  document.getElementById("drag").lastElementChild.remove();
});

document.getElementsByClassName("todo")[0].addEventListener("click", (e) => {
  console.log(`Target Item : ${e.target.textContent}`);
});

document.getElementsByClassName("outer")[0].addEventListener("click", () => {
  console.log("Outer Box");
});

document
  .getElementsByClassName("inner-outer")[0]
  .addEventListener("click", (e) => {
    console.log("Inner-Outer Box");
    e.stopPropagation();
  });

document.getElementsByClassName("inner")[0].addEventListener("click", (e) => {
  console.log("Inner Box");
  e.stopPropagation();
});

document.getElementById("submitForm").addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(document.getElementById("nameField").value);
  console.log(document.getElementById("emailField").value);
});

document.getElementById("clickBtn").addEventListener("click", (e) => {
  console.log("Click1");
  e.stopImmediatePropagation();
});

document.getElementById("clickBtn").addEventListener("click", (e) => {
  console.log("Click2");
});

document.getElementById("clickBtn").addEventListener("click", (e) => {
  console.log("Click3");
});

// let isHighlighted = false;

// document.getElementById("toggle").addEventListener("click", function () {
//   if (!isHighlighted) {
//     this.style.backgroundColor = "yellow";
//     isHighlighted = true;
//   } else {
//     this.style.backgroundColor = "";
//     isHighlighted = false;
//   }
// });

document.getElementById("toggle").addEventListener("click", function () {
  this.classList.toggle("hlt");
});
