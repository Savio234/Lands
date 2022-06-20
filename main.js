const menu = document.querySelector(".mob-nav");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".closeIcon");
const nav = document.querySelector(".navIcon");

hamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (menu.classList.contains("walletMenu")) {
        menu.classList.remove("walletMenu");
        close.style.display = "none";
        nav.style.display = "block";
        menu.style.width = "0";
        menu.style.height = "0";
        
    } else {
        menu.classList.add("walletMenu");
        close.style.display = "block";
        nav.style.display = "none";
        menu.style.width = "100%";
        menu.style.height = "80%";
    }
}


const wallet = document.getElementById("overlay");
const opened = document.getElementById("openBtn");
const closed = document.getElementById("closeBtn");


opened.addEventListener("click", navOpen);
closed.addEventListener("click", navClose);

  function navOpen() {
      wallet.style.width = "100%"
      console.log("I worked")
  }

  function navClose() {
      wallet.style.width = "0%"
      console.log("Done")
  }


let answers = document.querySelectorAll(".questions-container");

answers.forEach((event) => {
  event.addEventListener("click", () => {
    if (event.classList.contains("active")) {
      event.classList.remove("active");
    } else {
      event.classList.add("active");
    }

  });
  
});