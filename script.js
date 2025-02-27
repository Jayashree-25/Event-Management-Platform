document.getElementById("search-btn").addEventListener("click", function() {
    let query = document.getElementById("search").value.trim();
    if (query) {
        alert("You searched for: " + query);
    } else {
        alert("Please enter a search term.");
    }
});

document.getElementById("toggle-btn").addEventListener("click", function() {
    const hiddenEvents = document.querySelectorAll(".hidden");
    const toggleBtn = document.getElementById("toggle-btn");

    hiddenEvents.forEach(event => {
        event.classList.toggle("show");
    });

    toggleBtn.textContent = toggleBtn.textContent === "View More" ? "View Less" : "View More";
});
