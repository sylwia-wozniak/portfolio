(function(){
    var images = document.getElementsByClassName("js-img");//array of dom elements
    var leftButton = document.getElementsByClassName("button--left")[0];
    var rightButton = document.getElementsByClassName("button--right")[0];    

    var i=0;
    var activeImg = images[i];// first img elem
    activeImg.classList.add('active');
    rightButton.addEventListener('click', plusSlide);
    leftButton.addEventListener('click', minusSlide);
    
    function plusSlide(){
        activeImg.classList.remove('active');     
        if(i>=images.length-1){
           i=0;
        }else{
           i+=1; 
        }
        activeImg = images[i];
        activeImg.classList.add('active');
    }

    function minusSlide(){
        activeImg.classList.remove('active');     
        if(i==0){
           i=images.length-1;
        }else{
           i-=1;
        }
        activeImg = images[i];
        activeImg.classList.add('active');
    }
    function createSliderNav() {
        var sliderNav = document.querySelector('.slider__nav');
        for(var i =0; i<images.length; i++) {
            var navElement = document.createElement("div");
            navElement.className = "nav__item";
            sliderNav.appendChild(navElement);
        }
    }
    createSliderNav();
    
})();