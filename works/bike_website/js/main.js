// Contact
const sendButton = document.querySelector(".form-send");
if (sendButton) {
  sendButton.addEventListener("click", function (event) {
    event.preventDefault();
    const data = document.querySelectorAll(".form_item");
    const formData = {};
    data.forEach(function (element) {
      formData[element.name] = element.value;
    });
    console.log(formData.name);
    console.log(formData['name']);
  });
}

// Shop
// Price & color selector
const facetHeaders = document.querySelectorAll('.facet__header');
facetHeaders.forEach(function (facetHeader) {
  facetHeader.addEventListener('click', function () {
    const priceContainer = this.parentNode;
    const priceContainerClasses = priceContainer.classList;
    if (priceContainerClasses.contains('facet__container--item--active')) {
      priceContainerClasses.remove('facet__container--item--active');
    } else {
      priceContainerClasses.add('facet__container--item--active');
    }
  });
});

// FAQ Link
const questions = document.querySelectorAll(".faq-header");
questions.forEach(function (question) {
  question.addEventListener('click', function () {
    const menuContainer = this.parentNode;
    const menuContainerClasses = menuContainer.classList;
    if (menuContainerClasses.contains('faq__menu--active')) {
      menuContainerClasses.remove('faq__menu--active');
    } else {
      menuContainerClasses.add('faq__menu--active');
    }
  });
});

// Product Link
// Read more
const readMoreButton = document.querySelector('.bike-text-button');
if (readMoreButton) {
  readMoreButton.addEventListener('click', function () {
    const bikeText = document.querySelector('.js-bike-text');
    const bikeTextClasses = bikeText.classList;
    if (bikeTextClasses.contains('bike-text--all')) {
      bikeTextClasses.remove('bike-text--all');
    } else {
      bikeTextClasses.add('bike-text--all');
    }
  });
}

// Blog
// Share button
const shareDotsButtons = document.querySelectorAll('.blog-dots');
shareDotsButtons.forEach(function (shareDotsButton) {
  shareDotsButton.addEventListener('click', function () {
    const blogShare = this.parentNode;
    const blogShareClasses = blogShare.classList;
    if (blogShareClasses.contains('blog__share--active')) {
      blogShareClasses.remove('blog__share--active');
    } else {
      blogShareClasses.add('blog__share--active');
    }
  });
});

const sharePost = document.querySelector('.share-post');
if (sharePost) {
  sharePost.addEventListener('click', function () {
    const popPup = document.getElementById('share__popup');
    const popPupClasses = popPup.classList;
    const shareClose = document.querySelector('.share__close');
    const shareCloseClasses = shareClose.classList;
    const boxContainer = document.querySelector('.box__overly');
    const boxContainerClasses = boxContainer.classList;
    const blogShareClasses = sharePost.classList;
    if (popPupClasses.contains('share__popup--active')) {
      popPupClasses.remove('share__popup--active');
    } else {
      popPupClasses.add('share__popup--active');
      shareCloseClasses.add('share__close--active');
      boxContainerClasses.add('box__overly--opacity');
      blogShareClasses.remove('blog__share--active');
    }
  });
}
const shareClose = document.querySelector('.share__close');
if (shareClose) {
  shareClose.addEventListener('click', function () {
    const shareCloseClasses = shareClose.classList;
    const popPup = document.getElementById('share__popup');
    const popPupClasses = popPup.classList;
    const boxContainer = document.querySelector('.box__overly');
    const boxContainerClasses = boxContainer.classList;
    if (shareCloseClasses.contains('share__close--active')) {
      shareCloseClasses.remove('share__close--active');
      popPupClasses.remove('share__popup--active');
      boxContainerClasses.remove('box__overly--opacity');
    }
  });
}

// Shop Link
// Price range slider
const rangeSlider = document.querySelector(".range");
if (rangeSlider) {
  rangeSlider.addEventListener("input", function () {
    // Handle slider value changes here
    const sliderValue = this.value;
    // Your logic here
  });
}

// Index HOME
// Menu responsive
const navIcon = document.querySelector('.nav-icon');
if (navIcon) {
  navIcon.addEventListener('click', function () {
    const navList = this.nextElementSibling;
    const navListClasses = navList.classList;
    navListClasses.toggle('nav--open');
    this.classList.toggle('nav-icon--close');
  });
}

// Contact Link
// Map link (assuming this function is defined elsewhere)
function initMap() {
  const uluru = { lat: 37.770528, lng: -122.387222 };
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: uluru
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
