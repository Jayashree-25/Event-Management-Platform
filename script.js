window.addEventListener("load", function () {
    const navEntries = performance.getEntriesByType("navigation");
    const navType = navEntries.length > 0 ? navEntries[0].type : "navigate";

    if (navType === "back_forward") {
       
        document.getElementById("intro-screen").style.display = "none";
        document.getElementById("main-content").classList.remove("hidden");
    } else {
       
        setTimeout(() => {
            const introScreen = document.getElementById("intro-screen");
            introScreen.classList.add("fade-out");
            setTimeout(() => {
                introScreen.style.display = "none";
                document.getElementById("main-content").classList.remove("hidden");
            }, 1000);
        }, 4000);
    }
});


document.getElementById("search-btn").addEventListener("click", function () {
    let query = document.getElementById("search").value.trim();
    if (query) {
        alert("You searched for: " + query);
    } else {
        alert("Please enter a search term.");
    }
});
