// if we hit button plus pHide will  remove class hidden (display =block)
// and button will change into minus
// if we hit button minus pHide will add class hidden (display =none)

const buttonHide = document.querySelectorAll(".button");

buttonHide.forEach((button) => {
  button.addEventListener("click", function () {
    const parentItem = this.closest(".item"); //untuk menyeleksi button mana yang aktif dan pHide yang harus aktif.
    //closest() lebih baik dibandingkan dengan document.querySelector....
    const buttonPlus = parentItem.querySelector(".plus");
    const buttonMinus = parentItem.querySelector(".minus");
    const pHide = parentItem.querySelector(".pHide");

    pHide.classList.toggle("hidden");

    //to replace img icon plus and minus
    buttonMinus.classList.toggle("hidden");
    buttonPlus.classList.toggle("hidden");
  });
});

// for the backround

// Function to check the screen size and set the appropriate image source
function setBackgroundImage() {
  const bgImg = document.getElementById("bgImg");
  if (window.matchMedia("(min-width: 1024px)").matches) {
    // For desktop screens (min-width: 1024px)
    bgImg.src = "./assets/images/background-pattern-desktop.svg";
  } else {
    // For mobile screens or smaller than 1024px
    bgImg.src = "./assets/images/background-pattern-mobile.svg";
  }
}

// Call the function initially when the page loads
setBackgroundImage();

// Listen for window resize events and update the background image accordingly
window.addEventListener("resize", setBackgroundImage);

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
