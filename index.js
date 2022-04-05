const rateOne = document.querySelector(".one");
const rateTwo = document.querySelector(".two");
const rateThree = document.querySelector(".three");
const rateFour = document.querySelector(".four");
const rateFive = document.querySelector(".five");
const button = document.querySelector("#button");
const mainContainer = document.querySelector(".hide");
const thankYouContainer = document.querySelector(".thank-you-state");
const choosenRate = document.getElementById("choosen-rate");

let rateValue = 0;

button.addEventListener("click", () => {
  mainContainer.style.display = "none";
  thankYouContainer.style.display = "flex";

  choosenRate.textContent = rateValue;
});

rateOne.addEventListener("click", () => {
  rateValue = 1;
  console.log(rateValue);
  rateOne.classList.add("active");

  rateTwo.classList.remove("active");
  rateThree.classList.remove("active");
  rateFour.classList.remove("active");
  rateFive.classList.remove("active");
});

rateTwo.addEventListener("click", () => {
  rateValue = 2;
  console.log(rateValue);
  rateTwo.classList.add("active");

  rateOne.classList.remove("active");
  rateThree.classList.remove("active");
  rateFour.classList.remove("active");
  rateFive.classList.remove("active");
});

rateThree.addEventListener("click", () => {
  rateValue = 3;
  console.log(rateValue);
  rateThree.classList.add("active");

  rateTwo.classList.remove("active");
  rateOne.classList.remove("active");
  rateFour.classList.remove("active");
  rateFive.classList.remove("active");
});

rateFour.addEventListener("click", () => {
  rateValue = 4;
  console.log(rateValue);
  rateFour.classList.add("active");

  rateTwo.classList.remove("active");
  rateThree.classList.remove("active");
  rateOne.classList.remove("active");
  rateFive.classList.remove("active");
});

rateFive.addEventListener("click", () => {
  rateValue = 5;
  console.log(rateValue);
  rateFive.classList.add("active");

  rateTwo.classList.remove("active");
  rateThree.classList.remove("active");
  rateFour.classList.remove("active");
  rateOne.classList.remove("active");
});
