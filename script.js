// const isLoggedIn = false;


// window.addEventListener("load", function () {
//     const navEntries = performance.getEntriesByType("navigation");
//     const navType = navEntries.length > 0 ? navEntries[0].type : "navigate";
//     if (navType === "back_forward") {
//         document.getElementById("intro-screen").style.display = "none";
//         document.getElementById("main-content").classList.remove("hidden");
//     } else {
//         setTimeout(() => {
//             const introScreen = document.getElementById("intro-screen");
//             introScreen.classList.add("fade-out");
//             setTimeout(() => {
//                 introScreen.style.display = "none";
//                 document.getElementById("main-content").classList.remove("hidden");
//             }, 1000);
//         }, 4000);
//     }


//     if (isLoggedIn) {
//         document.getElementById("profile-icon").classList.remove("hidden");
//         document.getElementById("section").classList.add("hidden");
//     }
// });


// document.getElementById("search-btn")?.addEventListener("click", function () {
//     const query = document.getElementById("search").value.trim();
//     if (query) {
//         alert("You searched for: " + query);
//     } else {
//         alert("Please enter a search term.");
//     }
// });

// --- Index Page Code (script.js) ---
window.addEventListener("load", function () {
    // Debug: Log current login state from localStorage
    console.log("Page load: isLoggedIn =", localStorage.getItem("isLoggedIn"));

    const profileIcon = document.getElementById("profile-icon");
    if (!profileIcon) {
        console.error("Profile icon element not found in the DOM.");
        return;
    }

    // Toggle profile icon visibility based on login state
    if (localStorage.getItem("isLoggedIn") === "true") {
        console.log("User is logged in. Removing 'hidden' class from profile icon.");
        profileIcon.classList.remove("hidden");
    } else {
        console.log("User is not logged in. Adding 'hidden' class to profile icon.");
        profileIcon.classList.add("hidden");
    }

    // Intro and main content logic remains unchanged
    const introScreen = document.getElementById("intro-screen");
    const mainContent = document.getElementById("main-content");

    if (!introScreen || !mainContent) return; // Prevent errors if elements are missing

    const navEntries = performance.getEntriesByType("navigation");
    const navType = navEntries.length > 0 ? navEntries[0].type : "navigate";

    if (navType === "back_forward" || sessionStorage.getItem("introShown")) {
        introScreen.style.display = "none";
        mainContent.classList.remove("hidden");
    } else {
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

// Search button functionality remains unchanged
document.getElementById("search-btn")?.addEventListener("click", function () {
    const query = document.getElementById("search")?.value.trim();
    if (query) {
        alert("You searched for: " + query);
    } else {
        alert("Please enter a search term.");
    }
});


// Search button functionality remains unchanged
document.getElementById("search-btn")?.addEventListener("click", function () {
    const query = document.getElementById("search")?.value.trim();
    if (query) {
        alert("You searched for: " + query);
    } else {
        alert("Please enter a search term.");
    }
});

// Login form submission handling with logging for enhanced traceability
// --- Login Page Code (login.js) ---
// Remove any resetting of the login state on the login page as well.

// Login form submission handling with robust logging
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
        console.log("Login successful. isLoggedIn =", localStorage.getItem("isLoggedIn"));
        
        setTimeout(() => {
            window.location.href = "index.html";
        }, 10000);
    })
    .catch(error => {
        console.error("Login error:", error.message);
        errorMsg.textContent = error.message;
    });
});