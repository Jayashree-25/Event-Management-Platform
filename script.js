// --- Index Page Code (script.js) ---
window.addEventListener("load", function () {
    // Debug: Log current login state from localStorage
    console.log("Page load: isLoggedIn =", localStorage.getItem("isLoggedIn"));

    const profileIcon = document.getElementById("profile-icon");
    const signupSection = document.getElementById("section");
    if (!profileIcon) {
        console.error("Profile icon element not found in the DOM.");
        return;
    }

    // Toggle profile icon visibility based on login state
    if (localStorage.getItem('isLoggedIn') === 'true') {
        console.log("User is logged in. Removing 'hidden' class from profile icon.");
        profileIcon.classList.remove("hidden");
        signupSection.classList.add("hidden")
    } else {
        console.log("User is not logged in. Adding 'hidden' class to profile icon.");
        profileIcon.classList.add("hidden");
        signupSection.classList.remove("hidden");
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