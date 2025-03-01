document.getElementById("search-btn").addEventListener("click", function () {
    let query = document.getElementById("search").value.trim();
    if (query) {
        alert("You searched for: " + query);
    } else {
        alert("Please enter a search term.");
    }
});

setTimeout(() => {
    const introScreen = document.getElementById("intro-screen");
    introScreen.classList.add("fade-out"); // Start fade-out + slide-up
    setTimeout(() => {
        introScreen.style.display = "none"; // Hide after animation
        document.getElementById("main-content").classList.remove("hidden");
    }, 1000); // Matches fade-out duration
}, 1000);
