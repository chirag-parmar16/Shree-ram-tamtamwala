// JavaScript to change navbar color on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Bento Carousel Logic
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".bento-carousel-track");
  const dots = document.querySelectorAll("#bento-dots .dot");

  if (track && dots.length > 0) {
    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const index = dot.getAttribute("data-index");

        // Move track
        track.style.transform = `translateX(-${index * 50}%)`;

        // Update dots
        dots.forEach((d) => d.classList.remove("active"));
        dot.classList.add("active");
      });
    });
  }
});
