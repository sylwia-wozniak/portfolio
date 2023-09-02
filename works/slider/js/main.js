(function () {
    const images = document.querySelectorAll(".js-img"); // NodeList of DOM elements
    const leftButton = document.querySelector(".button--left");
    const rightButton = document.querySelector(".button--right");

    let activeIndex = 0;
    let activeImg = images[activeIndex]; // First image element
    activeImg.classList.add("active");

    rightButton.addEventListener("click", () => changeSlide(1));
    leftButton.addEventListener("click", () => changeSlide(-1));

    function changeSlide(direction) {
        activeImg.classList.remove("active");
        activeIndex = (activeIndex + direction + images.length) % images.length;
        activeImg = images[activeIndex];
        activeImg.classList.add("active");
    }

    function createSliderNav() {
        const sliderNav = document.querySelector(".slider__nav");
        images.forEach((_, index) => {
            const navElement = document.createElement("div");
            navElement.className = "nav__item";
            navElement.addEventListener("click", () => {
                changeSlide(index - activeIndex);
            });
            sliderNav.appendChild(navElement);
        });
    }

    createSliderNav();
})();
