document.addEventListener("DOMContentLoaded", () => {
  fetch("data/greeting.json")
    .then(response => response.json())
    .then(greetings => {
      const container = document.getElementById("greetings-container");

      greetings.forEach(greet => {
        const card = document.createElement("div");
        card.className = "col-md-4 mb-4";

        card.innerHTML = `
          <div class="card h-100 shadow-sm border-0 rounded-4 p-3">
            <div class="card-body d-flex flex-column justify-content-between">
              <p class="card-text fs-5">${greet.message}</p>
              <div class="mt-3 d-flex justify-content-between">
                <button class="btn btn-outline-primary btn-sm copy-btn" title="Copy Message">
                  <i class="fas fa-copy"></i> Copy
                </button>
                <a href="https://api.whatsapp.com/send?text=${encodeURIComponent(greet.message)}" 
                   target="_blank" 
                   class="btn btn-success btn-sm" title="Send on WhatsApp">
                  <i class="fab fa-whatsapp"></i> Send
                </a>
              </div>
            </div>
          </div>
        `;

        container.appendChild(card);
      });

      // Copy functionality
      document.querySelectorAll(".copy-btn").forEach(button => {
        button.addEventListener("click", e => {
          const message = e.target.closest(".card").querySelector(".card-text").textContent;
          navigator.clipboard.writeText(message).then(() => {
            button.innerHTML = "Copied!";
            setTimeout(() => {
              button.innerHTML = '<i class="fas fa-copy"></i> Copy';
            }, 2000);
          });
        });
      });
    })
    .catch(error => {
      console.error("Error loading greetings:", error);
      document.getElementById("greetings-container").innerHTML = "<p class='text-danger'>Failed to load greetings.</p>";
    });
});
