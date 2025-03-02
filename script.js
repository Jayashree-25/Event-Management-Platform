window.addEventListener("load", function () {
    const introScreen = document.getElementById("intro-screen");
    const mainContent = document.getElementById("main-content");

    if (!introScreen || !mainContent) return; // Prevent errors if elements are missing

    // Show the intro screen initially
    introScreen.style.display = "flex";
    mainContent.classList.add("hidden");

    // After 4 seconds, fade out intro screen and show main content
    setTimeout(() => {
        introScreen.classList.add("fade-out");

        setTimeout(() => {
            introScreen.style.display = "none"; // Hides intro screen
            mainContent.classList.remove("hidden"); // Shows main content
        }, 1000); // Matches fade-out duration
    }, 4000); // Keep intro screen visible for 4 seconds
});

// Ensure isLoggedIn is always false in localStorage
localStorage.setItem("isLoggedIn", "false");

// Search button functionality
document.getElementById("search-btn")?.addEventListener("click", function () {
    const query = document.getElementById("search")?.value.trim();
    if (query) {
        alert("You searched for: " + query);
    } else {
        alert("Please enter a search term.");
    }
});

// Login form submission handling
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email")?.value;
    const password = document.getElementById("password")?.value;
    const errorMsg = document.getElementById("errorMsg");

    fetch("https://3b1vkr9w-3000.inc1.devtunnels.ms/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Error: Login failed. Verify your credentials and try again.");
        }
        return response.json();
    })
    .then(data => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("isLoggedIn", "false"); // Always force isLoggedIn to false
        window.location.href = "index.html";
    })
    .catch(error => {
        errorMsg.textContent = error.message;
    });
});
