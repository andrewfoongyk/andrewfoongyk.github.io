document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".hero-carousel").forEach(function (carousel) {
    var slides = carousel.querySelectorAll(".hero-carousel__slide");
    var caption = carousel.querySelector(".hero-carousel__caption");
    if (slides.length < 2) return;

    var index = 0;
    var intervalMs = 6000;
    var timer;

    function show(nextIndex) {
      slides[index].classList.remove("is-active");
      index = (nextIndex + slides.length) % slides.length;
      slides[index].classList.add("is-active");
      if (caption) caption.textContent = slides[index].dataset.caption || "";
    }

    // Always clear before setting so a stray call (e.g. a click while
    // already hovering) can never leave two intervals running at once.
    function start() {
      clearInterval(timer);
      timer = setInterval(function () { show(index + 1); }, intervalMs);
    }

    carousel.querySelector(".hero-carousel__arrow--next").addEventListener("click", function () {
      show(index + 1);
      start();
    });
    carousel.querySelector(".hero-carousel__arrow--prev").addEventListener("click", function () {
      show(index - 1);
      start();
    });

    carousel.addEventListener("mouseenter", function () { clearInterval(timer); });
    carousel.addEventListener("mouseleave", start);

    start();
  });
});
