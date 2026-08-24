document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".hero-carousel").forEach(function (carousel) {
    var slides = carousel.querySelectorAll(".hero-carousel__slide");
    if (slides.length < 2) return;

    var index = 0;
    var intervalMs = 6000;
    var timer;

    function show(nextIndex) {
      slides[index].classList.remove("is-active");
      index = (nextIndex + slides.length) % slides.length;
      slides[index].classList.add("is-active");
    }

    function start() {
      timer = setInterval(function () { show(index + 1); }, intervalMs);
    }

    function restart() {
      clearInterval(timer);
      start();
    }

    carousel.querySelector(".hero-carousel__arrow--next").addEventListener("click", function () {
      show(index + 1);
      restart();
    });
    carousel.querySelector(".hero-carousel__arrow--prev").addEventListener("click", function () {
      show(index - 1);
      restart();
    });

    carousel.addEventListener("mouseenter", function () { clearInterval(timer); });
    carousel.addEventListener("mouseleave", start);

    start();
  });
});
