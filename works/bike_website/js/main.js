(function(){
//contact
  var sendButton = document.getElementsByClassName("form-send")[0];
  if(sendButton){
    sendButton.addEventListener('click', function(event) {
        event.preventDefault();
        var data = document.getElementsByClassName("form_item");
        // var email = document.getElementsByClassName("form_item")[1].value;
        // var subject = document.getElementsByClassName("form_item")[2].value;
        // var message = document.getElementsByClassName("form_item")[3].value;
        var formData = {};
        for (let i = 0; i < data.length; i++) {
          var element = data[i];
          formData[element.name] = element.value;
        }
        console.log(formData.name);
        console.log(formData['name']);
    });
  }

//shop
//price & color sselector
  var facetHeaders = document.getElementsByClassName('facet__header');
  console.log(facetHeaders)
  for(i=0; i<facetHeaders.length; i++) {
    var facetHeader = facetHeaders[i];
    facetHeader.addEventListener('click', getPriceSlider);
  }

  function getPriceSlider() {
    var priceContainer = this.parentNode;
    var priceContainerClasses = priceContainer.classList;
    if (priceContainerClasses.contains('facet__container--item--active')){
       priceContainerClasses.remove('facet__container--item--active');
    }else {
     priceContainerClasses.add('facet__container--item--active');
    }
  }

//faq link   
  var questions = document.getElementsByClassName("faq-header");

  for(i=0; i<questions.length; i++) {
    var question = questions[i];
    question.addEventListener('click', getAnswear);
  }
  function getAnswear() {
    var menuContainer = this.parentNode;
    var menuContainerClasses = menuContainer.classList;
    if(menuContainerClasses.contains('faq__menu--active')){
       menuContainerClasses.remove('faq__menu--active'); 
    }else{
        menuContainerClasses.add('faq__menu--active');
    }
  }

//index HOME
//menu responsive
  // var iconButton = document.getElementsByClassName('nav-icon')[0];
  // iconButton.addEventListener('click', getNavList);
  
  // function getNavList() {
  //   var navList = document.getElementsByClassName('nav');
  //   var navListClasses = navList.classList;
  //   if(navListClasses.contains("nav--open")) {
  //      navListClasses.remove("nav--open");
  //   } else {
  //      navListClasses.add("nav--open");
  //   }
  // }
// });


//product link
//read more
  var readMoreButton = document.getElementsByClassName('bike-text-button')[0];
  if(readMoreButton){
    readMoreButton.addEventListener('click', getAllText);
  }

  function getAllText() {
    var bikeText = document.getElementsByClassName('js-bike-text')[0];
    var bikeTextClasses = bikeText.classList;
    if (bikeTextClasses.contains('bike-text--all')) {
      bikeTextClasses.remove('bike-text--all');
    }else {
      bikeTextClasses.add('bike-text--all');
    }
  }

//blog
//share button
  var shareDotsButtons = document.getElementsByClassName('blog-dots');
  for(i=0; i<shareDotsButtons.length; i++) {
    var shareDotsButton = shareDotsButtons[i];
    shareDotsButton.addEventListener('click', getSharePost);
  }

  function getSharePost() {
    var blogShare = this.parentNode;
    var blogShareClasses = blogShare.classList;
    if (blogShareClasses.contains('blog__share--active')) {
      blogShareClasses.remove('blog__share--active');
    }else {
      blogShareClasses.add('blog__share--active');
    }
  }
  var sharePost = document.getElementsByClassName('share-post')[0];
  if(sharePost){
    sharePost.addEventListener('click', getPopUp);
  }

    function getPopUp() {
      var popPup = document.getElementById('share__popup');
      var popPupClasses = popPup.classList;
      var shareClose = document.getElementsByClassName('share__close')[0];
      var shareCloseClasses = shareClose.classList;  
      var boxContainer = document.getElementsByClassName('box__overly')[0];
      var boxContainerClasses = boxContainer.classList;
      var sharePost = document.getElementsByClassName('share-post')[0];
      var blogShareClasses = sharePost.classList;  
      if (popPupClasses.contains('share__popup--active')){
        popPupClasses.remove('share__popup--active');
      }else {
        popPupClasses.add('share__popup--active');
        shareCloseClasses.add('share__close--active');
        boxContainerClasses.add('box__overly--opacity');
        blogShareClasses.remove('blog__share--active');
      }
    }
  
  var shareClose = document.getElementsByClassName('share__close')[0];
  if(shareClose){
    shareClose.addEventListener('click', getClose);
  }  

    function getClose(){
      var shareClose = document.getElementsByClassName('share__close')[0];
      var shareCloseClasses = shareClose.classList;
      var popPup = document.getElementById('share__popup');
      var popPupClasses = popPup.classList;
      var boxContainer = document.getElementsByClassName('box__overly')[0];
      var boxContainerClasses = boxContainer.classList;

      if (shareCloseClasses.contains('share__close--active')){
        shareCloseClasses.remove('share__close--active');
        popPupClasses.remove('share__popup--active');
        boxContainerClasses.remove('box__overly--opacity');
      } 
    }
  
})();

//shop link
//price range slider
$(function() {
  $(".range").slider({
    min: 0,
    value: 1300,
    max: 3000,
    orientation: "horizontal",
    range: "min",
    animate: true
  }); 
  //index HOME
  //menu responsive
  var $navIcon = $(this);
  $('.nav-icon').click(function(getList) {
    $(this).next('div').toggleClass('nav--open');
    $(this).toggleClass('nav-icon--close');
  });

});

//contact link
//map link
function initMap() {
    var uluru = {lat: 37.770528, lng: -122.387222};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }
 