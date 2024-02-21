// hide hidden dropdown

const popUp = document.querySelector(".navbar-popup");
const dropDown = document.querySelector(".dropdown");
const circle = document.querySelector(".dropdown-circle");

// Use onclick
// let pop = 0;
// popUp.addEventListener("click", function () {
//   ++pop;
//   if (pop % 2 === 0) {
//     document.querySelector(".dropdown").classList.add("dropdown__hide");
//   } else {
//     document.querySelector(".dropdown").classList.remove("dropdown__hide");
//   }
// });

// Use hover === onmouseover

popUp.onmouseover = function () {
  dropDown.classList.add("dropdown__hide");
};

dropDown.onmouseover = function () {
  dropDown.classList.add("dropdown__hide");
};

circle.onclick = function () {
  dropDown.classList.remove("dropdown__hide");
};

document.querySelector(".dropdown-form").onsubmit = function (event) {
  dropDown.classList.remove("dropdown__hide");
  event.preventDefault();
  document
    .querySelector(".dropdown-success")
    .classList.add("dropdown-success__hide");
};

document.querySelector(".dropdown-success__circle").onclick = function () {
  document
    .querySelector(".dropdown-success")
    .classList.remove("dropdown-success__hide");
};
