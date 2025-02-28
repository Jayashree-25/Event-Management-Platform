document.getElementById("search-btn").addEventListener("click", function() {
    let query = document.getElementById("search").value.trim();
    if (query) {
        alert("You searched for: " + query);
    } else {
        alert("Please enter a search term.");
    }
});

// Toggle for "New Events"
document.getElementById("toggle-new-events").addEventListener("click", function() {
    const hiddenEvents = document.querySelectorAll(".events-container .hidden");
    hiddenEvents.forEach(event => event.classList.toggle("show"));

    this.textContent = this.textContent === "View More" ? "View Less" : "View More";
});

// Toggle for "Upcoming Events"
document.getElementById("toggle-upcoming-events").addEventListener("click", function() {
    const hiddenEvents = document.querySelectorAll(".heading .hidden");
    hiddenEvents.forEach(event => event.classList.toggle("show"));

    this.textContent = this.textContent === "View More" ? "View Less" : "View More";
});
