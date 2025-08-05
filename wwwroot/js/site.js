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

// This is for the scroll efficient 
      
        let lastScrollY = window.scrollY;
        const navbar = document.getElementById("navbar");

        window.addEventListener("scroll", () => {
            if (window.scrollY > lastScrollY) {
                // Scrolling down
                navbar.classList.add("-translate-y-full");
            } else {
                // Scrolling up
                navbar.classList.remove("-translate-y-full");
            }
            lastScrollY = window.scrollY;
        });

        // Mobile menu toggle
        document.getElementById("menu-toggle").addEventListener("click", function () {
            const menu = document.getElementById("mobile-menu");
            menu.classList.toggle("hidden");
        });

   
    function openModal(id) {
      document.getElementById(id).classList.remove('hidden');
    }
    function closeModal(id) {
      document.getElementById(id).classList.add('hidden');
    }


  const scrollBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.remove("hidden");
    } else {
      scrollBtn.classList.add("hidden");
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
