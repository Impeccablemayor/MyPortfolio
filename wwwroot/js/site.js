window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    if (preloader) {
        preloader.style.opacity = "0";
        preloader.style.transition = "opacity 0.5s ease";

        // Wait for the fade-out to complete before hiding it
        setTimeout(() => {
            preloader.style.display = "none";
        }, 500); // matches the transition time
    }
});
