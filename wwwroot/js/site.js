window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    if (preloader) {
        // Simulate slow load (e.g., 3 seconds)
        setTimeout(() => {
            preloader.style.opacity = "0";
            preloader.style.transition = "opacity 0.5s ease";
            setTimeout(() => {
                preloader.style.display = "none";
            }, 500);
        }, 3000); // 3 second delay
    }
});
