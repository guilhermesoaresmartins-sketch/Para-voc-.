// =========================
// CORAÇÕES FLUTUANTES
// =========================

const heartsContainer =
  document.getElementById("hearts");


function createHeart() {

  const heart =
    document.createElement("div");

  heart.classList.add("heart");


  heart.innerHTML = "♥";


  heart.style.left =
    Math.random() * 100 + "vw";


  heart.style.fontSize =
    Math.random() * 25 + 10 + "px";


  heart.style.animationDuration =
    Math.random() * 8 + 7 + "s";


  heartsContainer.appendChild(heart);


  setTimeout(() => {

    heart.remove();

  }, 15000);

}


setInterval(createHeart, 800);




// =========================
// MENU MOBILE
// =========================

const menuButton =
  document.getElementById("menuButton");

const menu =
  document.getElementById("menu");


menuButton.addEventListener("click", () => {

  menu.classList.toggle("active");

});


// Fecha o menu quando clicar
// em algum link

const menuLinks =
  document.querySelectorAll("nav a");


menuLinks.forEach(link => {

  link.addEventListener("click", () => {

    menu.classList.remove("active");

  });

});




// =========================
// MÚSICA
// =========================

const music =
  document.getElementById("music");

const musicButton =
  document.getElementById("musicButton");


let musicPlaying = false;


musicButton.addEventListener("click", () => {

  if (!musicPlaying) {

    music.play();

    musicButton.innerHTML = "❚❚";

    musicPlaying = true;

  } else {

    music.pause();

    musicButton.innerHTML = "♫";

    musicPlaying = false;

  }

});




// =========================
// ANIMAÇÕES AO ROLAR
// =========================

const revealElements =
  document.querySelectorAll(".reveal");


function revealOnScroll() {

  revealElements.forEach(element => {

    const elementTop =
      element.getBoundingClientRect().top;


    const screenHeight =
      window.innerHeight;


    if (
      elementTop <
      screenHeight - 100
    ) {

      element.classList.add("active");

    }

  });

}


window.addEventListener(
  "scroll",
  revealOnScroll
);


revealOnScroll();




// =========================
// SEGREDO
// =========================

const secretButton =
  document.getElementById("secretButton");

const secretModal =
  document.getElementById("secretModal");

const closeModal =
  document.getElementById("closeModal");


// Abrir

secretButton.addEventListener("click", () => {

  secretModal.classList.add("active");

});


// Fechar

closeModal.addEventListener("click", () => {

  secretModal.classList.remove("active");

});


// Fechar clicando fora

secretModal.addEventListener("click", event => {

  if (
    event.target === secretModal
  ) {

    secretModal.classList.remove("active");

  }

});
