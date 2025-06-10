// Form submission handler
document
  .getElementById("contactForm")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple validation
    if (!name || !email || !message) {
      alert("Please fill in all fields");
      return;
    }

    // In a real application, you would send this data to a server
    console.log("Form submitted:", { name, email, message });

    // Show success message
    alert("Thank you for your message! I will get back to you soon.");
    this.reset();
  });

// Initialize Bootstrap components
document.addEventListener("DOMContentLoaded", function () {
  // Initialize tooltips
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Fetch GitHub repos (example API call)
  if (document.querySelector(".github-repos")) {
    fetch("https://api.github.com/users/yourusername/repos")
      .then((response) => response.json())
      .then((data) => {
        const reposContainer = document.querySelector(".github-repos");
        data.slice(0, 3).forEach((repo) => {
          const repoElement = document.createElement("div");
          repoElement.className = "card mb-3";
          repoElement.innerHTML = `
                        <div class="card-body">
                            <h5 class="card-title">${repo.name}</h5>
                            <p class="card-text">${
                              repo.description || "No description available"
                            }</p>
                            <a href="${
                              repo.html_url
                            }" class="btn btn-primary">View on GitHub</a>
                        </div>
                    `;
          reposContainer.appendChild(repoElement);
        });
      })
      .catch((error) => console.error("Error fetching GitHub repos:", error));
  }
});
