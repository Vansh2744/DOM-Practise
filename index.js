let button = document.getElementById("colorChangeBtn");
let changePara = document.getElementById("welcome");

button.addEventListener("click", () => {
  changePara.style.backgroundColor = "red";
});
