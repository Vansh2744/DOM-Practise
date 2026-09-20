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
