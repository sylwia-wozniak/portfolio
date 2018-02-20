(function(){
    var categories = document.getElementsByClassName("js-category-toggle");

    for(var i=0; i<categories.length; i++){
        var category = categories[i];
        category.addEventListener("click", getListElements);
    }

    function getListElements(){
        var menuContainer = this.parentNode;
        var menuContainerClasses = menuContainer.classList;
        if(menuContainerClasses.contains('active')){
           menuContainerClasses.remove('active'); 
        }else{
            menuContainerClasses.add('active');
        }
    }    
})();


$(function(){
    $('.jq-header-toggle').click(function() {
        // var $parent = $(this).parent();
        // if($parent.hasClass('active')){
        //     $parent.removeClass('active');
        // }else{
        //     $parent.addClass('active');
        // }
        $(this).parent('').toggleClass('active');
    });
    // $('.menu__container').on('click','.jq-header-toggle',function(){
    //     var $elem = $(this);
    //     $elem.parent().toggleClass('active');
    //     $elem.siblings('.jq-list').slideToggle('slow');
    // });
});

    

   /* for(var i=0;i<category.length;i++){
        var numbercategory = categories[i];
        category.addEventListener('click', getListElements);
    }    
    function getListElements(){
        var value = this.getAttribute('elements');
    }*/
