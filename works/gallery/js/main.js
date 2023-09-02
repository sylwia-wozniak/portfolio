document.addEventListener("DOMContentLoaded", function() {
  const scrollToLinks = document.querySelectorAll('a[href^="#"]');
  scrollToLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = link.hash.substring(1);
      const targetElement =
          document.getElementById(targetId) ||
          document.querySelector(`a[name="${targetId}"]`) ||
          document.documentElement;
      const targetOffset =
          targetElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: targetOffset,
        behavior: "smooth"
      });
    });
  });

  let currentImg;
  const images = document.querySelectorAll(".js-image");
  images.forEach(function(img, index) {
    img.dataset.index = index;
  });

  function showGallery(image) {
    document.querySelector(".gallery__items--image").src = image.dataset.src;
    document.querySelector(".overlay").style.display = "block";
    document.body.classList.add("body--overlay");
    document.querySelector(".gallery").style.display = "block";
  }

  images.forEach(function(img) {
    img.addEventListener("click", function() {
      showGallery(img);
      currentImg = parseInt(img.dataset.index);
    });
  });

  document
      .querySelector(".gallery__items--close")
      .addEventListener("click", function() {
        document.querySelector(".overlay").style.display = "none";
        document.querySelector(".gallery").style.display = "none";
        document.body.classList.remove("body--overlay");
      });

  document
      .querySelector(".gallery__items--right")
      .addEventListener("click", function() {
        currentImg =
            currentImg + 1 < images.length ? currentImg + 1 : 0;
        document.querySelector(".gallery__items--image").src = images[currentImg].dataset.src;
      });

  document
      .querySelector(".gallery__items--left")
      .addEventListener("click", function() {
        currentImg =
            currentImg > 0 ? currentImg - 1 : images.length - 1;
        document.querySelector(".gallery__items--image").src = images[currentImg].dataset.src;
      });
});
