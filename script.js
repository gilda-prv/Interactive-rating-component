const container = document.querySelector(".container");
const containerthank = document.querySelector(".container-thank");
const submitbtn = document.querySelector(".sub");
const rateagain = document.querySelector(".sub-btn");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");
// submitbtn
submitbtn.addEventListener("click", () => {
  containerthank.style.display = "block";
  container.style.display = "none";
});
// rateagain
rateagain.addEventListener("click", () => {
  containerthank.style.display = "none";
  container.style.display = "block";
});
rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
