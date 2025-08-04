// ================================
// main.js – Core Script for Homepage
// ================================

document.addEventListener("DOMContentLoaded", () => {
  // Load header and footer
  fetch("components/header.html")
    .then(res => res.text())
    .then(data => document.getElementById("header").innerHTML = data);

  fetch("components/footer.html")
    .then(res => res.text())
    .then(data => document.getElementById("footer").innerHTML = data);

  // Typed.js setup (if typed-message span exists)
  if (document.getElementById("typed-message")) {
    new Typed("#typed-message", {
      strings: [
        "Celebrate the bond of love and protection ✨",
        "A festival of care, laughter & memories 🌸",
        "Tie the Rakhi, Share the Love! ❤️"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });
  }

  // Swiper.js setup (if swiper exists)
  if (document.querySelector(".mySwiper")) {
    new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
      },
      loop: true,
      autoplay: {
        delay: 2500,
      },
    });
  }

  // Scroll animation trigger for fade-in
  const fadeEls = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.1
  });

  fadeEls.forEach(el => observer.observe(el));
});
const swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    effect: "slide",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });