// countdown.js

document.addEventListener("DOMContentLoaded", () => {
  const targetDate = new Date("2025-08-09T00:00:00").getTime();
  const countdownEl = document.getElementById("countdown");

  if (!countdownEl) return;

  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      countdownEl.innerHTML = "<strong>🎉 Happy Raksha Bandhan! 🎊</strong>";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((distance % (1000 * 60)) / 1000);

    countdownEl.innerHTML = `
      <div class="d-flex justify-content-center gap-3 fs-4 fw-bold text-danger">
        <div><span class="count-box">${days}</span> Days</div>
        <div><span class="count-box">${hrs}</span> Hrs</div>
        <div><span class="count-box">${mins}</span> Min</div>
        <div><span class="count-box">${secs}</span> Sec</div>
      </div>
    `;
  };

  updateCountdown();
  setInterval(updateCountdown, 1000);
});
