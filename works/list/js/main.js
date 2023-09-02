(function () {
    const categories = document.querySelectorAll(".js-category-toggle");

    categories.forEach(function (category) {
        category.addEventListener("click", getListElements);
    });

    function getListElements() {
        const menuContainer = this.parentNode;
        const menuContainerClasses = menuContainer.classList;
        if (menuContainerClasses.contains("active")) {
            menuContainerClasses.remove("active");
        } else {
            menuContainerClasses.add("active");
        }
    }
})();

$(function(){
    $('.jq-header-toggle').click(function() {
        $(this).parent('').toggleClass('active');
    });

});
