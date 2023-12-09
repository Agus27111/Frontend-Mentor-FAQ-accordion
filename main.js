// if we hit button plus pHide will  remove class hidden (display =block)
// and button will change into minus
// if we hit button minus pHide will add class hidden (display =none)

const buttonHide = document.querySelectorAll(".button");

buttonHide.forEach((button) => {
  button.addEventListener("click", function () {
    const parentItem = this.closest(".item");
    const buttonPlus = parentItem.querySelector(".plus");
    const buttonMinus = parentItem.querySelector(".minus");
    const pHide = parentItem.querySelector(".pHide");

    pHide.classList.toggle("hidden");

    //to replace img icon plus and minus
    buttonMinus.classList.toggle("hidden");
    buttonPlus.classList.toggle("hidden");
  });
});

//My first Try

// const buttonHide = document.querySelectorAll(".button");

// buttonHide.forEach((button) => {
//   button.addEventListener("click", () => {
//     const buttonPlus = document.querySelectorAll(".plus");
//     const buttonMinus = document.querySelectorAll(".minus");
//     const pHide = document.querySelectorAll(".pHide");

//     pHide.classList.toggle("hidden");
//     buttonMinus.classList.toggle("hidden");
//     buttonPlus.classList.toggle("hidden");
//   });
// });
