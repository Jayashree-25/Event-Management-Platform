window.addEventListener("load", function () {
    const introScreen = document.getElementById("intro-screen");
    const mainContent = document.getElementById("main-content");

    if (!introScreen || !mainContent) return; // Prevent errors if elements are missing

    // Check if the page was loaded via back/forward navigation
    const navEntries = performance.getEntriesByType("navigation");
    const navType = navEntries.length > 0 ? navEntries[0].type : "navigate";

    if (navType === "back_forward" || sessionStorage.getItem("introShown")) {
        // Skip intro if user is navigating back/forward or it has been shown already
        introScreen.style.display = "none";
        mainContent.classList.remove("hidden");
    } else {
        // Show intro screen normally for the first time
        introScreen.style.display = "flex";
        mainContent.classList.add("hidden");

        setTimeout(() => {
            introScreen.classList.add("fade-out");
            setTimeout(() => {
                introScreen.style.display = "none";
                mainContent.classList.remove("hidden");
                sessionStorage.setItem("introShown", "true"); 
            }, 1000);
        }, 4000); 
    }
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
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "index.html";
    })
    .catch(error => {
        errorMsg.textContent = error.message;
    });
});
