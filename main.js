// Navigation Scroll Effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Bento Carousel Logic (Home Page)
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".bento-carousel-track");
  const dots = document.querySelectorAll("#bento-dots .dot");

  if (track && dots.length > 0) {
    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const index = dot.getAttribute("data-index");
        track.style.transform = `translateX(-${index * 50}%)`;
        dots.forEach((d) => d.classList.remove("active"));
        dot.classList.add("active");
      });
    });
  }
});

// Menu Filtering Engine
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".btn-filter");
  const menuItems = document.querySelectorAll(".menu-item");

  if (filterButtons.length > 0 && menuItems.length > 0) {
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Toggle Active Button
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const filterValue = btn.getAttribute("data-filter");

        menuItems.forEach((item) => {
          const category = item.getAttribute("data-category");
          
          if (filterValue === "all" || filterValue === category) {
            // SHOW
            item.style.setProperty('display', 'block', 'important');
            // Force a reflow for animation
            item.offsetHeight; 
            item.style.opacity = "1";
            item.style.transform = "scale(1)";
            item.style.pointerEvents = "auto";
          } else {
            // HIDE
            item.style.opacity = "0";
            item.style.transform = "scale(0.8)";
            item.style.pointerEvents = "none";
            // Wait for transition then remove from layout
            setTimeout(() => {
              if (item.style.opacity === "0") {
                item.style.setProperty('display', 'none', 'important');
              }
            }, 300);
          }
        });
      });
    });
  }
});
